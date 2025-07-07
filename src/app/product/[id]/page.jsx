"use client";

import { use } from "react";
import {
  ProjectDetailLayout,
  ProjectHero,
  Section,
  TechStack,
  ProjectGallery,
} from "../../../components";

export default function ProductPage({ params }) {
  const { id } = use(params);

  // Mock data - in real app, fetch based on id
  const projectData = {
    title: "E-commerce Platform for Artisanal Goods",
    description:
      "This project involved developing a comprehensive e-commerce platform for a local artisan collective, enabling them to showcase and sell their handcrafted goods online. The platform supports product listings, user accounts, shopping cart functionality, and secure payment processing.",
    role: "As the lead full-stack developer, I was responsible for the entire development lifecycle, from initial concept and design to deployment and ongoing maintenance. My contributions included designing the database schema, implementing the backend API, developing the frontend user interface, and integrating payment gateways.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBttQ_WvwjAeyF3JhkeKE24bC2hDjjVcrHXRMamhla2iDjExIkUzn6dmY9KDsWNaLTvW10lQhpsxwMkA4VXjWEGlvUI6MyJ77C-cVlWJf2tb6LD6XuSrw_IckGWkACXY3maZviT5pkhmojuQ2mCfnLE_2HCt3j8nmx-wLBQJtkpJnPgpIH5c5rD3OwAEr1ZRIj6rTqdum20NQtHDx00vQs-KlPmfVNFQJ96gH9vMUTRR6j52oVMQbabMzAruGVZoBYtxRFf2wXQp4Kk",
    technologies: [
      { category: "Frontend", name: "" },
      { category: "Backend", name: "" },
      { category: "Database", name: "" },
      { category: "Authentication", name: "" },
      { category: "React", name: "" },
      { category: "Express.js", name: "" },
      { category: "MySQL", name: "" },
      { category: "JWT", name: "" },
      { category: "Next.js", name: "" },
      { category: "Node.js", name: "" },
      { category: "PostgreSQL", name: "" },
      { category: "", name: "" },
      { category: "TypeScript", name: "" },
      { category: "PHP", name: "" },
      { category: "MongoDB", name: "" },
      { category: "", name: "" },
      { category: "Ant Design", name: "" },
      { category: "NestJS", name: "" },
      { category: "", name: "" },
      { category: "", name: "" },
      { category: "Tailwind CSS", name: "" },
      { category: "", name: "" },
      { category: "", name: "" },
      { category: "", name: "" },
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJG7DnGdjwIm6NR4lZiDEDBP-WWxXECb6D473YEtzOtYFPWPcuEjjZNng6e2ifcXOZOVYKr_s81auxr8FhNBYEKyidCZBdBXnkvhdpTcO70P7U6fRl5OuySde9PxhCnUgZLGTfI38-_CZlgiib9X8zDCKcbcaQZyrED6X1k1qwdidqHuOHnmc4FtYh-fiHiTuwhN9_oQvw-rppXYRpscnztSQRGOCYMSbMTr_gsWzF6N92CDqibCtbnbYgYk08_1DRMBp28eFH6ns",
    ],
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <ProjectDetailLayout onBackClick={handleBackClick}>
      <ProjectHero image={projectData.heroImage} title={projectData.title} />

      <h1 className="text-[#0d141c] text-[22px] lg:text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 lg:px-6 text-left pb-3 pt-5 lg:pt-8">
        {projectData.title} {id}
      </h1>

      <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-4xl">
        {projectData.description}
      </p>

      <Section title="My Role">
        <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-4xl">
          {projectData.role}
        </p>
      </Section>

      <Section title="Technologies Used">
        <TechStack technologies={projectData.technologies} />
      </Section>

      <Section title="Visual Showcase">
        <ProjectGallery images={projectData.galleryImages} />
      </Section>
    </ProjectDetailLayout>
  );
}
