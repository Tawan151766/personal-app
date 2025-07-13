"use client";

import { use } from "react";
import { getProjectDetailData } from "../../../../utils/translateProjects";
import { useTranslations } from "next-intl";
import {
  ProjectDetailLayout,
  ProjectHero,
  Section,
  TechStack,
  ProjectGallery,
} from "../../../components";

export default function ProductPage({ params }) {
  const { id } = use(params);
  const t = useTranslations("projects");
  const projectData = getProjectDetailData(t, id);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <ProjectDetailLayout onBackClick={handleBackClick}>
      <ProjectHero image={projectData.heroImage} title={projectData.title} />

      <h1 className="text-[#0d141c] text-[22px] lg:text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 lg:px-6 text-left pb-3 pt-5 lg:pt-8">
        {projectData.title}
      </h1>

      <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-4xl">
        {projectData.description}
      </p>

      <Section title={t("sections.myRole")}>
        <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-4xl">
          {projectData.role}
        </p>
      </Section>

      <Section title={t("sections.technologiesUsed")}>
        <TechStack technologies={projectData.technologies} />
      </Section>

      <Section title={t("sections.visualShowcase")}>
        <ProjectGallery images={projectData.galleryImages} />
      </Section>
    </ProjectDetailLayout>
  );
}
