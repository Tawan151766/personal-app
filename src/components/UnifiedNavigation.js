"use client";

import { usePathname } from "next/navigation";
import { Icon } from "./index";

const NAVIGATION_ITEMS = [
  {
    id: "home",
    href: "/",
    icon: "house",
    label: "Home",
    exact: true
  },
  {
    id: "about",
    href: "/about-me",
    icon: "user",
    label: "About Me"
  },
  {
    id: "portfolio",
    href: "/product",
    icon: "briefcase",
    label: "Portfolio"
  },
  {
    id: "contact",
    href: "/contact",
    icon: "envelope",
    label: "Contact"
  }
];

export default function UnifiedNavigation({ 
  items = NAVIGATION_ITEMS,
  activeColor = "text-[#0d141c]",
  inactiveColor = "text-[#49739c]",
  className = ""
}) {
  const pathname = usePathname();

  const isActive = (item) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div className={`flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2 ${className}`}>
      {items.map((item) => {
        const active = isActive(item);
        const colorClass = active ? activeColor : inactiveColor;
        
        return (
          <a
            key={item.id}
            className={`just flex flex-1 flex-col items-center justify-end gap-1 ${active ? 'rounded-full' : ''} ${colorClass}`}
            href={item.href}
            title={item.label}
          >
            <div className={`${colorClass} flex h-8 items-center justify-center`}>
              <Icon name={item.icon} size="24px" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
