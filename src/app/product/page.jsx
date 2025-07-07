"use client";

import { 
  PortfolioLayout, 
  Section, 
  ProjectsList 
} from "../../components";

export default function ProductPage() {
  const projects = [
    {
      category: "Web Development",
      title: "E-commerce Platform",
      description: "Developed a full-fledged e-commerce platform with user authentication, product catalog, shopping cart, and payment gateway integration.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAnb0_0nprUl8oFXMRAwY_wuFMRMlFp66qEo2GVCqchGnvBqwCIge0ogIAzuGS-QJk1d_CgZ03vPRo3a-MrwAXy6X4xrdXpslGzLlX-YWpghHsAcFf4MsfROG07wF7stnF0PojtLTcMZpYtTDYo__y7Qu-ec_oCnjfEWLPIhIM3IahWNjxXhlHw47x6aevjcWsfOflvHj68rMXuqjB84LkDwJWQiOW3HEZzUDawS-cZFsMoKJUpB8dZOvBrfIcwB2FU05tuwZfEAQ1",
      buttonText: "View Project"
    },
    {
      category: "Web Development",
      title: "Social Media Dashboard",
      description: "Created a social media dashboard to manage multiple accounts, schedule posts, and analyze engagement metrics.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdTe0Yau9idyfn13xyWe_UXxtwrntRN_YU_xto7RCHuWMZmq_DFLeJTl4gEBtVRi5g8PHk2x3T_EFVL--oRAnkAjlkiBKeSf8iU_H3EdaVPyHFa6ojPfBy2MgQnQ6k7Awr3ORupgELYfkQEhVjyh7vUrJzkw8c6Fw61xll4U_0boYO8z0DFvdcQy_KeiMLH5b9ihVXgpPYXwT17yJmxiEW8Lum-Vs9F_UpqAM-bzUNZKt3jOykpEFqkM0q7T9zhSAShXrueJ4mokaB",
      buttonText: "View Project"
    },
    {
      category: "Web Development",
      title: "Personal Blog",
      description: "Designed and developed a personal blog with a custom CMS, enabling easy content creation and management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrBZJ15socxNonOZr1Ra6uRv3NJAoy3ksCiMIVi7ZUwZ7qe5UOZgLhAzMe2XlFgkQGOK6s8Rc7Rja2GJHoBBkKb4-Vj6I5zWghSWFaWaDuFr4Jy5vD5MaTvibV5B2PgvaxCBbLbPbrQtLIhx57m8NH_Woi23896heFTQ7ugIRypFSwqjIuwKpfj1lfpOrFl1CdVzpGQZj8PAHzps7y_6ltIsrl2qtvV4YswCKzXO5exShV2vm-NLC6-I1wscredZ8XyMrj90kTtJIr",
      buttonText: "View Project"
    }
  ];

  const handleProjectClick = (project, index) => {
    console.log(`Clicked project: ${project.title} at index ${index}`);
    // Add navigation or modal logic here
  };

  return (
    <PortfolioLayout>
      <Section title="Featured Projects">
        <ProjectsList 
          projects={projects} 
          onProjectClick={handleProjectClick}
        />
      </Section>
    </PortfolioLayout>
  );
}
