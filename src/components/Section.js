export default function Section({ title, children, className = "" }) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-[#0d141c] text-[22px] lg:text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 lg:px-6 pb-3 pt-5 lg:pt-8">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
