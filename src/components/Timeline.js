"use client";

export default function Timeline({ items = [] }) {
  return (
    <div className="relative px-4 lg:px-6">
      {/* Timeline line */}
      <div className="absolute left-8 lg:left-10 top-0 bottom-0 w-0.5 bg-[#e7edf4]"></div>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-4">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 bg-[#0c7ff2] rounded-full border-2 border-white shadow-sm mt-1"></div>
            
            {/* Content */}
            <div className="flex-1 bg-slate-50 rounded-lg p-4 lg:p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141c] text-base lg:text-lg font-semibold leading-normal">
                  {item.title}
                </h3>
                <p className="text-[#0c7ff2] text-sm lg:text-base font-medium leading-normal">
                  {item.subtitle}
                </p>
                {item.description && (
                  <p className="text-[#49739c] text-sm lg:text-base font-normal leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}
                {item.period && (
                  <p className="text-[#6b7280] text-xs lg:text-sm font-normal leading-normal mt-1">
                    {item.period}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
