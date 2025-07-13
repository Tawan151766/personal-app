"use client";

import { ContactLayout, ContactForm, SocialLinks } from "../../components";

export default function ContactPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  const handleFormSubmit = async (data) => {
    console.log("Form submitted:", data);

    // Simulate API call with realistic timing and potential errors
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Simulate occasional failures for testing error handling
        if (Math.random() < 0.05) {
          // 5% chance of failure
          reject(
            new Error(
              "Network error occurred. Please check your connection and try again."
            )
          );
          return;
        }

        // Simulate validation errors
        if (data.email.includes("test@error")) {
          reject(
            new Error(
              "Invalid email domain. Please use a different email address."
            )
          );
          return;
        }

        // Successful submission
        console.log("✅ Message sent successfully:", {
          name: data.name,
          email: data.email,
          message: data.message.substring(0, 50) + "...",
          timestamp: new Date().toISOString(),
        });

        resolve({ success: true, message: "Message sent successfully!" });
      }, 1500 + Math.random() * 1000); // 1.5-2.5 second delay
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tawan-chankachang-78a7b2373/",
      color: "bg-[#0077b5] text-white",
    },
    {
      name: "GitHub",
      href: "https://github.com/Tawan151766",
      color: "bg-[#333] text-white",
    },
    {
      name: "Line",
      href: "https://line.me/R/ti/p/~0631316693t._.",
      color: "bg-[#00c300] text-white",
    },
  ];

  return (
    <ContactLayout onBackClick={handleBackClick}>
      <ContactForm onSubmit={handleFormSubmit} />
      <SocialLinks links={socialLinks} title="Connect with me" />
    </ContactLayout>
  );
}
