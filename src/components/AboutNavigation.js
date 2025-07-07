"use client";

import { Icon } from "./index";

export default function AboutNavigation() {
  return (
    <div className="flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2">
      <a
        className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0d141c]"
        href="/"
      >
        <div className="text-[#0d141c] flex h-8 items-center justify-center">
          <Icon name="house" size="24px" />
        </div>
      </a>
      <a
        className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
        href="/about-me"
      >
        <div className="text-[#49739c] flex h-8 items-center justify-center">
          <Icon name="user" size="24px" />
        </div>
      </a>
      <a
        className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
        href="#"
      >
        <div className="text-[#49739c] flex h-8 items-center justify-center">
          <Icon name="briefcase" size="24px" />
        </div>
      </a>
      <a
        className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
        href="#"
      >
        <div className="text-[#49739c] flex h-8 items-center justify-center">
          <Icon name="envelope" size="24px" />
        </div>
      </a>
    </div>
  );
}
