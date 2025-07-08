export default function InfoCard({ title, subtitle, className = "",description }) {
  return (
    <div className={`flex items-center gap-4 bg-slate-50 px-4 lg:px-6 min-h-[72px] lg:min-h-[80px] py-2 lg:py-3 ${className}`}>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d141c] text-base lg:text-lg font-medium leading-normal line-clamp-1">
          {title}
        </p>
        {subtitle && (
          <p className="text-[#49739c] text-sm lg:text-base font-normal leading-normal line-clamp-2">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-gray-600 text-sm lg:text-base font-normal leading-normal line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
