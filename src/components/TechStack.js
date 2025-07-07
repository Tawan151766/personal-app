export default function TechStack({ technologies = [] }) {
  // Create grid items - each technology takes one cell
  const gridItems = [];
  
  // Add category headers and technologies in the order provided
  technologies.forEach((tech, index) => {
    gridItems.push(
      <div key={index} className="flex flex-col gap-1 lg:gap-2 border-t border-solid border-t-[#cedbe8] py-4 lg:py-6 pr-2 lg:pr-4">
        <p className="text-[#49739c] text-sm lg:text-base font-normal leading-normal">
          {tech.category || ''}
        </p>
        <p className="text-[#0d141c] text-sm lg:text-base font-normal leading-normal">
          {tech.name || ''}
        </p>
      </div>
    );
  });

  // Fill remaining cells to complete the grid if needed
  const totalCells = Math.ceil(gridItems.length / 2) * 2;
  for (let i = gridItems.length; i < totalCells; i++) {
    gridItems.push(
      <div key={`empty-${i}`} className="flex flex-col gap-1 lg:gap-2 border-t border-solid border-t-[#cedbe8] py-4 lg:py-6 pr-2 lg:pr-4">
        <p className="text-[#49739c] text-sm lg:text-base font-normal leading-normal"></p>
        <p className="text-[#0d141c] text-sm lg:text-base font-normal leading-normal"></p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 lg:gap-x-6">
      {gridItems}
    </div>
  );
}
