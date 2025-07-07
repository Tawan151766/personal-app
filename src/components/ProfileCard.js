"use client";

export default function ProfileCard({ 
  profileImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC3J0QFBiu9u4DBsEtREEZfwZvZN1wjIaGBBTyhQtWI82S9fTqP_Oy9eT2zQjjcHAnnPyNYT1wKmrihnSlSQ7xwyayEtHiz41Dhv_v5J7JQuY1Skp-0T3J-hJ47vEQsDk_4MWi_gkgt99ZjdeuJkT3hsqq2pVlqUwAicIaU_KeeVQOIqIyCyXCvp61igrtG6M1RI_eEpvCGqEgXdkviUgPrWIkx09aQDhyAy_FZRUU0nBlOVCZhp6l7AboPk4-d9-3XucJku8psx5y8",
  name = "Ethan Carter",
  title = "Full-Stack Developer",
  experience = "2 years of experience",
  description = "I specialize in creating dynamic web applications using modern technologies. My expertise includes front-end development with React, back-end development with Node.js, and database management with PostgreSQL. I am passionate about building scalable and user-friendly solutions.",
  buttonText = "View My Work",
  onButtonClick,
  showButton = true
}) {
  return (
    <>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{
                backgroundImage: `url("${profileImage}")`
              }}
            ></div>
            <div className="flex flex-col items-center justify-center justify-center">
              <p className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                {name}
              </p>
              <p className="text-[#49739c] text-base font-normal leading-normal text-center">
                {title}
              </p>
              <p className="text-[#49739c] text-base font-normal leading-normal text-center">
                {experience}
              </p>
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          {description}
        </p>
      )}
      {showButton && buttonText && (
        <div className="flex px-4 py-3 justify-center">
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={onButtonClick}
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
      )}
    </>
  );
}
