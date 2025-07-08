"use client";

import { Icon, LanguageSwitcher } from "./index";

export default function PageHeader({ title, showShareButton = false, onShareClick, centered = false }) {
  const titleClasses = centered 
    ? "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12"
    : "text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1";

  return (
    <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
      <div className="flex items-center">
        {title && (
          <h2 className={titleClasses}>
            {title}
          </h2>
        )}
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
      
      </div>
    </div>
  );
}
