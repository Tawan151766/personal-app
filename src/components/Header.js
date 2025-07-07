"use client";

import { Icon, LanguageSwitcher } from "./index";
import { useTranslations } from "next-intl";

export default function Header({
  title,
  centered = false,
  showMenuButton = true,
  showLanguageSwitcher = true,
}) {
  const t = useTranslations("common");

  const displayTitle = title || t("home");

  const titleClasses = centered
    ? "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12"
    : "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1";

  return (
    <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
      <h2 className={titleClasses}>{displayTitle}</h2>
      <div className="flex items-center gap-2">
        {showLanguageSwitcher && <LanguageSwitcher />}
      </div>
    </div>
  );
}
