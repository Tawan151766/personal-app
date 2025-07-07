export default function SkillTag({ skill }) {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4">
      <p className="text-[#0d141c] text-sm font-medium leading-normal">
        {skill}
      </p>
    </div>
  );
}
