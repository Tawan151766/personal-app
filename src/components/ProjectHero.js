export default function ProjectHero({ image, title }) {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-lg min-h-[218px]"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
    </div>
  );
}
