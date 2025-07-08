"use client";

import { PortfolioLayout, Section, ProjectsList } from "../../components";
import { useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations("projects");

  const projects = [
    {
      id: "organization-Todo-System",
      category: t("categories.webDevelopment"),
      title: t("organizationTodoSystem.title"),
      description: t("organizationTodoSystem.description"),
      image: "/assets/product/app/todo/todo-admin-dashboard.png",
      buttonText: t("buttonText"),
    },
    // {
    //   id: "social-media-dashboard",
    //   category: t("categories.webDevelopment"),
    //   title: t("socialMediaDashboard.title"),
    //   description: t("socialMediaDashboard.description"),
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAdTe0Yau9idyfn13xyWe_UXxtwrntRN_YU_xto7RCHuWMZmq_DFLeJTl4gEBtVRi5g8PHk2x3T_EFVL--oRAnkAjlkiBKeSf8iU_H3EdaVPyHFa6ojPfBy2MgQnQ6k7Awr3ORupgELYfkQEhVjyh7vUrJzkw8c6Fw61xll4U_0boYO8z0DFvdcQy_KeiMLH5b9ihVXgpPYXwT17yJmxiEW8Lum-Vs9F_UpqAM-bzUNZKt3jOykpEFqkM0q7T9zhSAShXrueJ4mokaB",
    //   buttonText: t("buttonText"),
    // },
    // {
    //   id: "personal-blog",
    //   category: t("categories.webDevelopment"),
    //   title: t("personalBlog.title"),
    //   description: t("personalBlog.description"),
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDrBZJ15socxNonOZr1Ra6uRv3NJAoy3ksCiMIVi7ZUwZ7qe5UOZgLhAzMe2XlFgkQGOK6s8Rc7Rja2GJHoBBkKb4-Vj6I5zWghSWFaWaDuFr4Jy5vD5MaTvibV5B2PgvaxCBbLbPbrQtLIhx57m8NH_Woi23896heFTQ7ugIRypFSwqjIuwKpfj1lfpOrFl1CdVzpGQZj8PAHzps7y_6ltIsrl2qtvV4YswCKzXO5exShV2vm-NLC6-I1wscredZ8XyMrj90kTtJIr",
    //   buttonText: t("buttonText"),
    // },
    // {
    //   id: "mobile-app",
    //   category: t("categories.mobileDevelopment"),
    //   title: t("mobileApp.title"),
    //   description: t("mobileApp.description"),
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBttQ_WvwjAeyF3JhkeKE24bC2hDjjVcrHXRMamhla2iDjExIkUzn6dmY9KDsWNaLTvW10lQhpsxwMkA4VXjWEGlvUI6MyJ77C-cVlWJf2tb6LD6XuSrw_IckGWkACXY3maZviT5pkhmojuQ2mCfnLE_2HCt3j8nmx-wLBQJtkpJnPgpIH5c5rD3OwAEr1ZRIj6rTqdum20NQtHDx00vQs-KlPmfVNFQJ96gH9vMUTRR6j52oVMQbabMzAruGVZoBYtxRFf2wXQp4Kk",
    //   buttonText: t("buttonText"),
    // },
    // {
    //   id: "data-visualization",
    //   category: t("categories.dataScience"),
    //   title: t("dataVisualization.title"),
    //   description: t("dataVisualization.description"),
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
    //   buttonText: t("buttonText"),
    // },
  ];

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
