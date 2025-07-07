export default function InfoCard({ title, subtitle, className = "" }) {
  return (
    <div className={`flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 ${className}`}>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">
          {title}
        </p>
        {subtitle && (
          <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
