"use client";

import { PortfolioLayout, Section, ProjectsList } from "../../components";
import { getTranslatedProjects } from "../../../utils/translateProjects";
import { useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations("projects");
  const projects = getTranslatedProjects(t);

  const handleProjectClick = (project, index) => {
    console.log(`Clicked project: ${project.title} at index ${index}`);
    // Navigate to project detail page
    window.location.href = `/product/${project.id}`;
  };

  return (
    <PortfolioLayout>
      <Section title={t("title")}>
        <ProjectsList projects={projects} onProjectClick={handleProjectClick} />
      </Section>
    </PortfolioLayout>
  );
}
