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
      <div className="flex p-4 lg:p-8 @container">
        <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start">
          <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 lg:min-h-48 lg:w-48 flex-shrink-0"
              style={{
                backgroundImage: `url("${profileImage}")`
              }}
            ></div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="text-[#0d141c] text-[22px] lg:text-[32px] font-bold leading-tight tracking-[-0.015em] text-center lg:text-left">
                {name}
              </p>
              <p className="text-[#49739c] text-base lg:text-lg font-normal leading-normal text-center lg:text-left">
                {title}
              </p>
              <p className="text-[#49739c] text-base lg:text-lg font-normal leading-normal text-center lg:text-left">
                {experience}
              </p>
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-8 text-center lg:text-left max-w-4xl lg:mx-0 mx-auto">
          {description}
        </p>
      )}
      {showButton && buttonText && (
        <div className="flex px-4 lg:px-8 py-3 justify-center lg:justify-start">
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 lg:h-12 px-4 lg:px-6 bg-[#0c7ff2] text-slate-50 text-sm lg:text-base font-bold leading-normal tracking-[0.015em]"
            onClick={onButtonClick}
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
      )}
    </>
  );
}
