import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects = [], onProjectClick }) {
  return (
    <div className="lg:grid lg:grid-cols-1 xl:grid-cols-2 lg:gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          category={project.category}
          title={project.title}
          description={project.description}
          image={project.image}
          onViewProject={() => onProjectClick?.(project, index)}
          buttonText={project.buttonText}
        />
      ))}
    </div>
  );
}
