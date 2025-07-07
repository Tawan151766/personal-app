"use client";

import { 
  AboutLayout, 
  ProfileCard, 
  Section, 
  SkillsList, 
  InfoCard 
} from "../../components";

function AboutPage() {
  const skills = [
    "React", "Next.js", "TypeScript", "Ant Design", "Tailwind CSS",
    "Express.js", "Node.js", "PHP", "NestJS", "MySQL", "PostgreSQL", "MongoDB"
  ];

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
      
      <Section title="About Me">
        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
          I'm a dedicated full-stack developer with two years of experience in
          crafting dynamic web applications. My expertise spans both front-end
          and back-end technologies, allowing me to deliver comprehensive
          solutions tailored to meet diverse project needs. I'm passionate about
          creating efficient, scalable, and user-friendly applications.
        </p>
      </Section>

      <Section title="Education">
        <InfoCard 
          title="Chaopraya University"
          subtitle="Faculty of Science and Technology, Computer Science"
        />
      </Section>

      <Section title="Experience">
        <InfoCard 
          title="2 years"
          subtitle="Full-Stack Developer"
        />
      </Section>

      <Section title="Skills">
        <SkillsList skills={skills} />
      </Section>
    </AboutLayout>
  );
}

export default AboutPage;
