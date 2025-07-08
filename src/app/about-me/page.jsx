"use client";

import { useTranslations } from "next-intl";
import {
  AboutLayout,
  ProfileCard,
  Section,
  SkillsList,
  InfoCard,
  Timeline,
} from "../../components";

function AboutPage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Ant Design",
    "Tailwind CSS",
    "Express.js",
    "Node.js",
    "PHP",
    "NestJS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];
  const t = useTranslations("about-me");
  const handleBackClick = () => {
    // Navigate back logic
    window.history.back();
  };

  const handleShareClick = () => {
    // Share functionality
    console.log("Share clicked");
  };

  return (
    <AboutLayout onBackClick={handleBackClick} onShareClick={handleShareClick}>
      <ProfileCard
        profileImage="/assets/avatar.png"
        name="Ethan Carter"
        title="Full-Stack Developer"
        experience="2 years of experience"
        description=""
        buttonText=""
        showButton={false}
      />

      <Section title={t("title")}>
        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {t("description")}
        </p>
      </Section>

      <Section title={t("Education.title")}>
        <InfoCard
          title={t("Education.degree")}
          subtitle={t("Education.university")}
        />
      </Section>

      <Section title={t("Experience.title")}>
        <Timeline
          items={[
            {
              title: t("Experience.waylar"),
              subtitle: t("Experience.waylarPosition"),
              description: t("Experience.waylarDescription"),
              period: "2023 - Present",
            },
            {
              title: t("Experience.UTE"),
              subtitle: t("Experience.UTEPosition"),
              description: t("Experience.UTEDescription"),
              period: "2022",
            },
            {
              title: t("Experience.plantEquipment"),
              subtitle: t("Experience.plantEquipmentPosition"),
              description: t("Experience.plantEquipmentDescription"),
              period: "2022",
            },
          ]}
        />
      </Section>

      <Section title={"Skills"}>
        <SkillsList skills={skills} />
      </Section>
    </AboutLayout>
  );
}

export default AboutPage;
