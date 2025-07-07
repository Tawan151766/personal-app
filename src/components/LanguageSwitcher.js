"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "vn", name: "Tiếng Việt", flag: "🇻🇳" },
];

export default function LanguageSwitcher({ className = "" }) {
  const locale = useLocale();
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  const changeLanguage = (newLocale) => {
    // Set locale in cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
    setIsOpen(false);
    // Reload the page to apply new locale
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#e7edf4] text-[#0d141c] text-sm font-medium">
          <span>🇺🇸</span>
          <span className="hidden sm:inline">English</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#e7edf4] text-[#0d141c] text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
        aria-label={t("language")}
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-1 w-full min-w-[150px] bg-white border border-[#e7edf4] rounded-lg shadow-lg z-20 overflow-hidden">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                  language.code === locale
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#0d141c]"
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
                {language.code === locale && (
                  <svg
                    className="w-4 h-4 ml-auto text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
