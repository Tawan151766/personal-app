"use client";

import { useTranslations } from "next-intl";

export default function ProfileCard({
  profileImage = "/assets/profile.png",
  onButtonClick,
  showButton = true,
}) {
  const t = useTranslations("home.profile");

  return (
    <>
      <div className="flex p-4 lg:p-8 @container">
        <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start">
          <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 lg:min-h-48 lg:w-48 flex-shrink-0"
              style={{
                backgroundImage: `url("${profileImage}")`,
              }}
            ></div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="text-[#0d141c] text-[22px] lg:text-[32px] font-bold leading-tight tracking-[-0.015em] text-center lg:text-left">
                {t("name")}
              </p>
              <p className="text-[#49739c] text-base lg:text-lg font-normal leading-normal text-center lg:text-left">
                {t("title")}
              </p>
              <p className="text-[#49739c] text-base lg:text-lg font-normal leading-normal text-center lg:text-left">
                {t("experience")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-8 text-center lg:text-left max-w-4xl lg:mx-0 mx-auto">
        {t("description")}
      </p>
      {showButton && (
        <div className="flex px-4 lg:px-8 py-3 justify-center lg:justify-start">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 lg:h-12 px-4 lg:px-6 bg-[#0c7ff2] text-slate-50 text-sm lg:text-base font-bold leading-normal tracking-[0.015em]"
            onClick={onButtonClick}
          >
            <span className="truncate">{t("viewWork")}</span>
          </button>
        </div>
      )}
    </>
  );
}
