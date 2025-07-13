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

      {/* GitHub and Preview Links */}
      {(projectData.githubLink || projectData.previewLink) && (
        <div className="flex gap-4 px-4 lg:px-6 pb-2">
          {projectData.githubLink && (
            <a
              href={projectData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#333] text-white font-medium hover:bg-[#222] transition"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              GitHub
            </a>
          )}
          {projectData.previewLink && (
            <a
              href={projectData.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0c7ff2] text-white font-medium hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-4.553a.5.5 0 0 0-.707-.707L14.293 9.293a1 1 0 0 1-1.414 0L9.293 5.293a.5.5 0 0 0-.707.707L13 10m2 4v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7z"/></svg>
              Preview
            </a>
          )}
        </div>
      )}

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
