export default function Section({ title, children, className = "" }) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
