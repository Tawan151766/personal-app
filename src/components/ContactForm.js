"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// Constants for validation
const VALIDATION_RULES = {
  name: {
    min: 2,
    max: 50,
    pattern: /^[a-zA-Z\s\-'\.]+$/,
    required: true,
  },
  email: {
    max: 100,
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    required: true,
  },
  message: {
    min: 10,
    max: 1000,
    required: true,
  },
};

const RATE_LIMIT_STORAGE_KEY = "contact_form_submissions";
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;

export default function ContactForm({ onSubmit, className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  const submitButtonRef = useRef(null);
  const formRef = useRef(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("contact_form_draft");
    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft);
        if (
          parsedDraft.timestamp &&
          Date.now() - parsedDraft.timestamp < 24 * 60 * 60 * 1000
        ) {
          // 24 hours
          setFormData(parsedDraft.data);
          setIsDirty(true);
        } else {
          localStorage.removeItem("contact_form_draft");
        }
      } catch (error) {
        localStorage.removeItem("contact_form_draft");
      }
    }
  }, []);

  // Save draft to localStorage when form changes
  useEffect(() => {
    if (isDirty && !isSuccess) {
      const draftData = {
        data: formData,
        timestamp: Date.now(),
      };
      localStorage.setItem("contact_form_draft", JSON.stringify(draftData));
    }
  }, [formData, isDirty, isSuccess]);

  // Sanitize input to prevent XSS
  const sanitizeInput = (value) => {
    return value
      .replace(/[<>]/g, "") // Remove potential HTML tags
      .trim();
  };

  // Enhanced validation with detailed feedback
  const validateField = (name, value) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return "";

    const sanitizedValue = sanitizeInput(value);

    if (rules.required && !sanitizedValue) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (sanitizedValue.length < rules.min) {
      return `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } must be at least ${rules.min} characters`;
    }

    if (sanitizedValue.length > rules.max) {
      return `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } must be no more than ${rules.max} characters`;
    }

    if (rules.pattern && !rules.pattern.test(sanitizedValue)) {
      if (name === "email") {
        return "Please enter a valid email address";
      }
      if (name === "name") {
        return "Name can only contain letters, spaces, hyphens, apostrophes, and periods";
      }
      return `Please enter a valid ${name}`;
    }

    return "";
  };

  const validateForm = useCallback(() => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Check rate limiting
  const checkRateLimit = () => {
    const now = Date.now();
    const submissions = JSON.parse(
      localStorage.getItem(RATE_LIMIT_STORAGE_KEY) || "[]"
    );
    const recentSubmissions = submissions.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      return false;
    }

    // Clean up old submissions and add current time
    const updatedSubmissions = [...recentSubmissions, now];
    localStorage.setItem(
      RATE_LIMIT_STORAGE_KEY,
      JSON.stringify(updatedSubmissions)
    );
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    // Apply character limits
    const rules = VALIDATION_RULES[name];
    if (rules && sanitizedValue.length > rules.max) {
      return; // Don't update if exceeding max length
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    setIsDirty(true);

    // Real-time validation for the current field
    const fieldError = validateField(name, sanitizedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));

    // Clear submit error and success state
    if (submitError) setSubmitError("");
    if (isSuccess) setIsSuccess(false);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName) => {
    setFocusedField(null);
    // Validate on blur for better UX
    const fieldError = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: fieldError,
    }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitError("");
    setIsSuccess(false);
    setIsDirty(false);
    localStorage.removeItem("contact_form_draft");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent spam submissions
    const now = Date.now();
    if (now - lastSubmissionTime < 2000) {
      // 2 second cooldown
      setSubmitError("Please wait a moment before submitting again.");
      return;
    }

    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = formRef.current?.querySelector(
          `[name="${firstErrorField}"]`
        );
        errorElement?.focus();
      }
      return;
    }

    // Check rate limiting
    if (!checkRateLimit()) {
      setSubmitError(
        "Too many submissions. Please wait a minute before trying again."
      );
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    setLastSubmissionTime(now);

    try {
      await onSubmit?.(formData);
      setIsSuccess(true);
      localStorage.removeItem("contact_form_draft"); // Clear draft on success

      // Auto reset form after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error.message ||
          "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      submitButtonRef.current?.click();
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClassName =
      "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-2 border h-14 lg:h-16 placeholder:text-[#49739c] p-4 lg:p-5 text-base lg:text-lg font-normal leading-normal transition-all duration-300 ease-in-out";

    const isFieldFocused = focusedField === fieldName;
    const hasError = errors[fieldName];
    const hasValue = formData[fieldName];
    const isValid = hasValue && !hasError;

    if (hasError) {
      return `${baseClassName} focus:ring-red-500 bg-red-50 border-red-300 shadow-sm`;
    }

    if (isValid) {
      return `${baseClassName} focus:ring-green-500 bg-green-50 border-green-300 shadow-sm`;
    }

    if (isFieldFocused) {
      return `${baseClassName} focus:ring-blue-500 bg-white border-blue-300 shadow-md transform scale-[1.02]`;
    }

    return `${baseClassName} focus:ring-blue-500 bg-[#e7edf4] border-transparent hover:bg-white hover:shadow-sm`;
  };

  const getTextareaClassName = () => {
    const baseClassName =
      "form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-2 border min-h-36 lg:min-h-48 max-h-64 placeholder:text-[#49739c] p-4 lg:p-5 text-base lg:text-lg font-normal leading-normal transition-all duration-300 ease-in-out";

    const isFieldFocused = focusedField === "message";
    const hasError = errors.message;
    const hasValue = formData.message;
    const isValid = hasValue && !hasError;

    if (hasError) {
      return `${baseClassName} focus:ring-red-500 bg-red-50 border-red-300 shadow-sm`;
    }

    if (isValid) {
      return `${baseClassName} focus:ring-green-500 bg-green-50 border-green-300 shadow-sm`;
    }

    if (isFieldFocused) {
      return `${baseClassName} focus:ring-blue-500 bg-white border-blue-300 shadow-md transform scale-[1.01]`;
    }

    return `${baseClassName} focus:ring-blue-500 bg-[#e7edf4] border-transparent hover:bg-white hover:shadow-sm`;
  };

  const getCharacterCount = (fieldName) => {
    const current = formData[fieldName]?.length || 0;
    const max = VALIDATION_RULES[fieldName]?.max || 0;
    const isNearLimit = current > max * 0.8;
    const isOverLimit = current > max;

    return (
      <span
        className={`text-xs mt-1 transition-colors duration-200 ${
          isOverLimit
            ? "text-red-600 font-medium"
            : isNearLimit
            ? "text-orange-600"
            : "text-[#49739c]"
        }`}
      >
        {current}/{max} characters
        {isNearLimit && !isOverLimit && " (approaching limit)"}
        {isOverLimit && " (over limit)"}
      </span>
    );
  };

  return (
    <div className={className}>
      <div className="relative">
        <h3 className="text-[#0d141c] tracking-light text-2xl lg:text-3xl font-bold leading-tight px-4 lg:px-6 text-left pb-2 pt-5 lg:pt-8">
          Get in touch
        </h3>
        <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-2xl">
          I'm currently seeking new opportunities and would love to hear from
          you. Whether you have a project in mind or just want to connect, feel
          free to reach out.
        </p>

        {/* Draft indicator */}
        {isDirty && !isSuccess && (
          <div className="mx-4 lg:mx-6 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg animate-fade-in">
            <div className="flex items-center text-sm text-blue-800">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Draft automatically saved
            </div>
          </div>
        )}

        {/* Success Message */}
        {isSuccess && (
          <div className="mx-4 lg:mx-6 mb-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in shadow-sm">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-green-800 font-medium">
                  Message sent successfully!
                </p>
                <p className="text-green-700 text-sm mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mx-4 lg:mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in shadow-sm">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-red-800 font-medium">
                  Unable to send message
                </p>
                <p className="text-red-700 text-sm mt-1">{submitError}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        noValidate
        className="space-y-1"
      >
        {/* Name Field */}
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1 group">
            <span className="text-sm lg:text-base font-medium text-[#0d141c] mb-2 flex items-center">
              Name <span className="text-red-500 ml-1">*</span>
              {formData.name && !errors.name && (
                <svg
                  className="w-4 h-4 text-green-600 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              placeholder="Your Full Name"
              className={getInputClassName("name")}
              disabled={isLoading || isSuccess}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : "name-help"}
              autoComplete="name"
              maxLength={VALIDATION_RULES.name.max}
            />
            <div className="min-h-6 flex justify-between items-start mt-1">
              {errors.name ? (
                <span
                  id="name-error"
                  className="text-red-600 text-sm animate-fade-in flex items-center"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4 mr-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </span>
              ) : (
                <span id="name-help" className="text-xs text-[#49739c]">
                  Enter your full name as you'd like to be addressed
                </span>
              )}
              {getCharacterCount("name")}
            </div>
          </label>
        </div>

        {/* Email Field */}
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1 group">
            <span className="text-sm lg:text-base font-medium text-[#0d141c] mb-2 flex items-center">
              Email <span className="text-red-500 ml-1">*</span>
              {formData.email && !errors.email && (
                <svg
                  className="w-4 h-4 text-green-600 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              placeholder="your.email@example.com"
              className={getInputClassName("email")}
              disabled={isLoading || isSuccess}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : "email-help"}
              autoComplete="email"
              maxLength={VALIDATION_RULES.email.max}
            />
            <div className="min-h-6 flex justify-between items-start mt-1">
              {errors.email ? (
                <span
                  id="email-error"
                  className="text-red-600 text-sm animate-fade-in flex items-center"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4 mr-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </span>
              ) : (
                <span id="email-help" className="text-xs text-[#49739c]">
                  I'll use this to respond to your message
                </span>
              )}
              {getCharacterCount("email")}
            </div>
          </label>
        </div>

        {/* Message Field */}
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1 group">
            <span className="text-sm lg:text-base font-medium text-[#0d141c] mb-2 flex items-center">
              Message <span className="text-red-500 ml-1">*</span>
              {formData.message && !errors.message && (
                <svg
                  className="w-4 h-4 text-green-600 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
              placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
              className={getTextareaClassName()}
              disabled={isLoading || isSuccess}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={
                errors.message ? "message-error" : "message-help"
              }
              maxLength={VALIDATION_RULES.message.max}
              rows={6}
            />
            <div className="min-h-6 flex justify-between items-start mt-1">
              {errors.message ? (
                <span
                  id="message-error"
                  className="text-red-600 text-sm animate-fade-in flex items-center"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4 mr-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </span>
              ) : (
                <span id="message-help" className="text-xs text-[#49739c]">
                  Share your thoughts, project details, or collaboration ideas
                </span>
              )}
              {getCharacterCount("message")}
            </div>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex px-4 lg:px-6 py-3">
          <div className="flex flex-col space-y-2 w-full max-w-[480px] lg:max-w-2xl">
            <button
              ref={submitButtonRef}
              type="submit"
              disabled={
                isLoading ||
                isSuccess ||
                Object.keys(errors).some((key) => errors[key])
              }
              className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 lg:h-14 px-6 lg:px-8 flex-1 text-slate-50 text-base lg:text-lg font-bold leading-normal tracking-[0.015em] transition-all duration-300 ease-in-out transform ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed scale-95"
                  : isSuccess
                  ? "bg-green-600 cursor-not-allowed scale-95"
                  : Object.keys(errors).some((key) => errors[key])
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0c7ff2] hover:bg-blue-600 active:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95"
              } ${
                !isLoading &&
                !isSuccess &&
                !Object.keys(errors).some((key) => errors[key])
                  ? "hover:shadow-xl"
                  : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="truncate">Sending Message...</span>
                </>
              ) : isSuccess ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="truncate">Message Sent!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="truncate">Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
