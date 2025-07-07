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
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#49739c] text-sm font-normal leading-normal">
              {category}
            </p>
            <p className="text-[#0d141c] text-base font-bold leading-tight">
              {title}
            </p>
            <p className="text-[#49739c] text-sm font-normal leading-normal">
              {description}
            </p>
          </div>
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit"
            onClick={onViewProject}
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
    </div>
  );
}
