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
        profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDLXBcQ91w2vZJiPAyIU_x8rnptFE9c8_fS5hBzn-UL2Dze85S5VInwv9wy3pTbtbgeiQ_7ohWN9yimtIBm12mTZALoyl2ecIKC1inHbviEuivo_RjCbinF7dssjr3G0A0DIJ7620l6N9G2E_A_w5_fcoPh5sAv0IWwc8La-XdX-AGpqomGnEOTKvLXh2vNr9A5Ql-N8qjSUHH-fNlUzTU3vSemsHZaVJKRuXH-SeohnpKX5OHC6anjEI9Z-igAaPlwN86o0pjnLGal"
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
