"use client";

import { Icon, LanguageSwitcher } from "./index";
import { useTranslations } from "next-intl";

export default function Header({ title, centered = false, showMenuButton = true, showLanguageSwitcher = true }) {
  const t = useTranslations('common');
  
  const displayTitle = title || t('home');
  
  const titleClasses = centered 
    ? "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12"
    : "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1";

  return (
    <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
      <h2 className={titleClasses}>
        {displayTitle}
      </h2>
      <div className="flex items-center gap-2">
        {showLanguageSwitcher && (
          <LanguageSwitcher />
        )}
        {showMenuButton && (
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#0d141c] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#0d141c] flex h-8 items-center justify-center">
                <Icon name="list" size="24px" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
