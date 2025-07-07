"use client";

export default function ProjectCard({ 
  category = "Web Development",
  title,
  description,
  image,
  onViewProject,
  buttonText = "View Project"
}) {
  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-8 rounded-lg">
        <div className="flex flex-[2_2_0px] lg:flex-[3_3_0px] flex-col gap-4">
          <div className="flex flex-col gap-1 lg:gap-2">
            <p className="text-[#49739c] text-sm lg:text-base font-normal leading-normal">
              {category}
            </p>
            <p className="text-[#0d141c] text-base lg:text-xl font-bold leading-tight">
              {title}
            </p>
            <p className="text-[#49739c] text-sm lg:text-base font-normal leading-normal">
              {description}
            </p>
          </div>
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 lg:h-10 px-4 lg:px-6 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm lg:text-base font-medium leading-normal w-fit"
            onClick={onViewProject}
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 lg:max-w-md"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
    </div>
  );
}
