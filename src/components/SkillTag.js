export default function SkillTag({ skill }) {
  return (
    <div className="flex h-8 lg:h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4 lg:pl-6 lg:pr-6">
      <p className="text-[#0d141c] text-sm lg:text-base font-medium leading-normal">
        {skill}
      </p>
    </div>
  );
}
