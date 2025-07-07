export default function ProjectGallery({ images = [] }) {
  if (images.length === 0) return null;

  return (
    <div className="flex w-full grow bg-slate-50 @container py-3 lg:py-6">
      <div className="w-full gap-1 lg:gap-2 overflow-hidden bg-slate-50 @[480px]:gap-2 aspect-[3/2] lg:aspect-[2/1] grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-[3fr_2fr_2fr]">
        {images.map((image, index) => {
          const isMainImage = index === 0;
          const spanClass = isMainImage 
            ? "w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
            : "w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2";
          
          return (
            <div
              key={index}
              className={spanClass}
              style={{ backgroundImage: `url("${image}")` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
