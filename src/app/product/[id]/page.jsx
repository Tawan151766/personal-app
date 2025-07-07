"use client";

import { use } from "react";
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
  const t = useTranslations('projects');

  // Mock data based on project ID
  const getProjectData = (projectId) => {
    const projectMap = {
      "ecommerce-platform": {
        title: t('ecommercePlatform.detailTitle'),
        description: t('ecommercePlatform.detailDescription'),
        role: t('ecommercePlatform.role'),
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAnb0_0nprUl8oFXMRAwY_wuFMRMlFp66qEo2GVCqchGnvBqwCIge0ogIAzuGS-QJk1d_CgZ03vPRo3a-MrwAXy6X4xrdXpslGzLlX-YWpghHsAcFf4MsfROG07wF7stnF0PojtLTcMZpYtTDYo__y7Qu-ec_oCnjfEWLPIhIM3IahWNjxXhlHw47x6aevjcWsfOflvHj68rMXuqjB84LkDwJWQiOW3HEZzUDawS-cZFsMoKJUpB8dZOvBrfIcwB2FU05tuwZfEAQ1",
        technologies: [
          { category: "Frontend", name: "React" },
          { category: "Frontend", name: "Next.js" },
          { category: "Frontend", name: "Tailwind CSS" },
          { category: "Backend", name: "Node.js" },
          { category: "Backend", name: "Express.js" },
          { category: "Database", name: "PostgreSQL" },
          { category: "Authentication", name: "JWT" },
          { category: "Payment", name: "Stripe API" },
          { category: "Deployment", name: "Vercel" },
          { category: "Version Control", name: "Git" },
        ],
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJG7DnGdjwIm6NR4lZiDEDBP-WWxXECb6D473YEtzOtYFPWPcuEjjZNng6e2ifcXOZOVYKr_s81auxr8FhNBYEKyidCZBdBXnkvhdpTcO70P7U6fRl5OuySde9PxhCnUgZLGTfI38-_CZlgiib9X8zDCKcbcaQZyrED6X1k1qwdidqHuOHnmc4FtYh-fiHiTuwhN9_oQvw-rppXYRpscnztSQRGOCYMSbMTr_gsWzF6N92CDqibCtbnbYgYk08_1DRMBp28eFH6ns",
        ],
      },
      "social-media-dashboard": {
        title: t('socialMediaDashboard.detailTitle'),
        description: t('socialMediaDashboard.detailDescription'),
        role: t('socialMediaDashboard.role'),
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdTe0Yau9idyfn13xyWe_UXxtwrntRN_YU_xto7RCHuWMZmq_DFLeJTl4gEBtVRi5g8PHk2x3T_EFVL--oRAnkAjlkiBKeSf8iU_H3EdaVPyHFa6ojPfBy2MgQnQ6k7Awr3ORupgELYfkQEhVjyh7vUrJzkw8c6Fw61xll4U_0boYO8z0DFvdcQy_KeiMLH5b9ihVXgpPYXwT17yJmxiEW8Lum-Vs9F_UpqAM-bzUNZKt3jOykpEFqkM0q7T9zhSAShXrueJ4mokaB",
        technologies: [
          { category: "Frontend", name: "React" },
          { category: "Frontend", name: "TypeScript" },
          { category: "Frontend", name: "Material-UI" },
          { category: "Backend", name: "Python" },
          { category: "Backend", name: "Django" },
          { category: "Database", name: "PostgreSQL" },
          { category: "Cache", name: "Redis" },
          { category: "APIs", name: "Facebook Graph API" },
          { category: "APIs", name: "Twitter API" },
          { category: "Deployment", name: "AWS EC2" },
        ],
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAdTe0Yau9idyfn13xyWe_UXxtwrntRN_YU_xto7RCHuWMZmq_DFLeJTl4gEBtVRi5g8PHk2x3T_EFVL--oRAnkAjlkiBKeSf8iU_H3EdaVPyHFa6ojPfBy2MgQnQ6k7Awr3ORupgELYfkQEhVjyh7vUrJzkw8c6Fw61xll4U_0boYO8z0DFvdcQy_KeiMLH5b9ihVXgpPYXwT17yJmxiEW8Lum-Vs9F_UpqAM-bzUNZKt3jOykpEFqkM0q7T9zhSAShXrueJ4mokaB",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
        ],
      },
      "personal-blog": {
        title: t('personalBlog.detailTitle'),
        description: t('personalBlog.detailDescription'),
        role: t('personalBlog.role'),
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrBZJ15socxNonOZr1Ra6uRv3NJAoy3ksCiMIVi7ZUwZ7qe5UOZgLhAzMe2XlFgkQGOK6s8Rc7Rja2GJHoBBkKb4-Vj6I5zWghSWFaWaDuFr4Jy5vD5MaTvibV5B2PgvaxCBbLbPbrQtLIhx57m8NH_Woi23896heFTQ7ugIRypFSwqjIuwKpfj1lfpOrFl1CdVzpGQZj8PAHzps7y_6ltIsrl2qtvV4YswCKzXO5exShV2vm-NLC6-I1wscredZ8XyMrj90kTtJIr",
        technologies: [
          { category: "Frontend", name: "Next.js" },
          { category: "Frontend", name: "React" },
          { category: "Frontend", name: "Tailwind CSS" },
          { category: "Backend", name: "Node.js" },
          { category: "Backend", name: "Prisma" },
          { category: "Database", name: "SQLite" },
          { category: "Content", name: "Markdown" },
          { category: "Authentication", name: "NextAuth.js" },
          { category: "Deployment", name: "Netlify" },
          { category: "SEO", name: "Next SEO" },
        ],
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrBZJ15socxNonOZr1Ra6uRv3NJAoy3ksCiMIVi7ZUwZ7qe5UOZgLhAzMe2XlFgkQGOK6s8Rc7Rja2GJHoBBkKb4-Vj6I5zWghSWFaWaDuFr4Jy5vD5MaTvibV5B2PgvaxCBbLbPbrQtLIhx57m8NH_Woi23896heFTQ7ugIRypFSwqjIuwKpfj1lfpOrFl1CdVzpGQZj8PAHzps7y_6ltIsrl2qtvV4YswCKzXO5exShV2vm-NLC6-I1wscredZ8XyMrj90kTtJIr",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
        ],
      },
      "mobile-app": {
        title: t('mobileApp.detailTitle'),
        description: t('mobileApp.detailDescription'),
        role: t('mobileApp.role'),
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBttQ_WvwjAeyF3JhkeKE24bC2hDjjVcrHXRMamhla2iDjExIkUzn6dmY9KDsWNaLTvW10lQhpsxwMkA4VXjWEGlvUI6MyJ77C-cVlWJf2tb6LD6XuSrw_IckGWkACXY3maZviT5pkhmojuQ2mCfnLE_2HCt3j8nmx-wLBQJtkpJnPgpIH5c5rD3OwAEr1ZRIj6rTqdum20NQtHDx00vQs-KlPmfVNFQJ96gH9vMUTRR6j52oVMQbabMzAruGVZoBYtxRFf2wXQp4Kk",
        technologies: [
          { category: "Mobile", name: "React Native" },
          { category: "Frontend", name: "TypeScript" },
          { category: "Navigation", name: "React Navigation" },
          { category: "Backend", name: "Firebase" },
          { category: "Database", name: "Firestore" },
          { category: "Authentication", name: "Firebase Auth" },
          { category: "Storage", name: "Firebase Storage" },
          { category: "APIs", name: "Google Fit API" },
          { category: "APIs", name: "Apple HealthKit" },
          { category: "Deployment", name: "App Store & Play Store" },
        ],
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBttQ_WvwjAeyF3JhkeKE24bC2hDjjVcrHXRMamhla2iDjExIkUzn6dmY9KDsWNaLTvW10lQhpsxwMkA4VXjWEGlvUI6MyJ77C-cVlWJf2tb6LD6XuSrw_IckGWkACXY3maZviT5pkhmojuQ2mCfnLE_2HCt3j8nmx-wLBQJtkpJnPgpIH5c5rD3OwAEr1ZRIj6rTqdum20NQtHDx00vQs-KlPmfVNFQJ96gH9vMUTRR6j52oVMQbabMzAruGVZoBYtxRFf2wXQp4Kk",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJG7DnGdjwIm6NR4lZiDEDBP-WWxXECb6D473YEtzOtYFPWPcuEjjZNng6e2ifcXOZOVYKr_s81auxr8FhNBYEKyidCZBdBXnkvhdpTcO70P7U6fRl5OuySde9PxhCnUgZLGTfI38-_CZlgiib9X8zDCKcbcaQZyrED6X1k1qwdidqHuOHnmc4FtYh-fiHiTuwhN9_oQvw-rppXYRpscnztSQRGOCYMSbMTr_gsWzF6N92CDqibCtbnbYgYk08_1DRMBp28eFH6ns",
        ],
      },
      "data-visualization": {
        title: t('dataVisualization.detailTitle'),
        description: t('dataVisualization.detailDescription'),
        role: t('dataVisualization.role'),
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
        technologies: [
          { category: "Frontend", name: "React" },
          { category: "Frontend", name: "TypeScript" },
          { category: "Visualization", name: "D3.js" },
          { category: "Charts", name: "Chart.js" },
          { category: "UI", name: "Ant Design" },
          { category: "Backend", name: "Python" },
          { category: "Backend", name: "FastAPI" },
          { category: "Database", name: "MongoDB" },
          { category: "Real-time", name: "WebSocket" },
          { category: "Deployment", name: "Docker" },
        ],
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8U_eMZQHvobsmS1PlWgnfLwej9w1CGbkzrnMWRGEJbWDfSSeTPAVUsd2vfIRJcx1Ngd_dR-UT-9js9OOmxNQjQYYcDXaSGJb329d39x_P6EA5JmDLbLW5sU6x2VL-vCSQQXpVAITbr9nC9Y9DLHW5VMHefeEKRsqfWE0hDLTU8aoXiysl2YmZa2QXlka5j_Fy--LY02U6HMQo6shNrXSFQ77k3M1i3RmscurkYRWcYqirMwfnjBNv3cbMCP_za180QGjJqWSQI2",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJG7DnGdjwIm6NR4lZiDEDBP-WWxXECb6D473YEtzOtYFPWPcuEjjZNng6e2ifcXOZOVYKr_s81auxr8FhNBYEKyidCZBdBXnkvhdpTcO70P7U6fRl5OuySde9PxhCnUgZLGTfI38-_CZlgiib9X8zDCKcbcaQZyrED6X1k1qwdidqHuOHnmc4FtYh-fiHiTuwhN9_oQvw-rppXYRpscnztSQRGOCYMSbMTr_gsWzF6N92CDqibCtbnbYgYk08_1DRMBp28eFH6ns",
        ],
      }
    };
    
    return projectMap[projectId] || projectMap["ecommerce-platform"];
  };

  // Get project data based on ID, fallback to first project if ID not found
  const projectData = getProjectData(id);

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

      <Section title={t('sections.myRole')}>
        <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-4xl">
          {projectData.role}
        </p>
      </Section>

      <Section title={t('sections.technologiesUsed')}>
        <TechStack technologies={projectData.technologies} />
      </Section>

      <Section title={t('sections.visualShowcase')}>
        <ProjectGallery images={projectData.galleryImages} />
      </Section>
    </ProjectDetailLayout>
  );
}
