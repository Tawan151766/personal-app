"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Icon } from "./index";

export default function UnifiedNavigation({
  activeColor = "text-[#0d141c]",
  inactiveColor = "text-[#49739c]",
  className = "",
}) {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  const NAVIGATION_ITEMS = [
    {
      id: "home",
      href: "/",
      icon: "house",
      label: t("home"),
      exact: true,
    },
    {
      id: "about",
      href: "/about-me",
      icon: "user",
      label: t("about"),
    },
    {
      id: "portfolio",
      href: "/product",
      icon: "briefcase",
      label: t("portfolio"),
    },
    {
      id: "contact",
      href: "/contact",
      icon: "envelope",
      label: t("contact"),
    },
  ];

  const isActive = (item) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div
      className={`
    flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2 
    md:flex-col md:gap-4 md:border-none md:bg-transparent md:p-0 
    fixed bottom-0 left-0 right-0 z-40 md:static
    ${className}
  `}
    >
      {" "}
      {NAVIGATION_ITEMS.map((item) => {
        const active = isActive(item);
        const colorClass = active ? activeColor : inactiveColor;

        return (
          <a
            key={item.id}
            className={`just flex flex-1 flex-col items-center justify-end gap-1 md:flex-row md:justify-start md:px-4 md:py-3 md:rounded-lg ${
              active ? "rounded-full md:bg-[#e7edf4]" : "md:hover:bg-gray-100"
            } ${colorClass}`}
            href={item.href}
            title={item.label}
          >
            <div
              className={`${colorClass} flex h-8 items-center justify-center md:mr-3`}
            >
              <Icon name={item.icon} size="24px" />
            </div>
            <span className="hidden md:block text-sm font-medium">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
