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
        {showShareButton && (
          <button 
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#0d141c] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            onClick={onShareClick}
          >
            <div className="text-[#0d141c]">
              <Icon name="share" size="24px" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
