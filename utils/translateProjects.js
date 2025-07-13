// utils/translateProjects.js
export function getTranslatedProjects(t) {
  return [
    {
      id: "organization-Todo-System",
      category: t("categories.webDevelopment"),
      title: t("organizationTodoSystem.title"),
      description: t("organizationTodoSystem.description"),
      image: "/assets/product/app/todo/todo-admin-dashboard.png",
      heroImage: "/assets/product/app/todo/todo-admin-dashboard.png",
      buttonText: t("buttonText"),
    },
    {
      id: "solva-go-travel",
      category: t("categories.webDevelopment"),
      title: t("solvaGoTravel.title"),
      description: t("solvaGoTravel.description"),
      image: "/assets/product/app/booking/home.png",
      heroImage: "/assets/product/app/booking/home.png",
      buttonText: t("buttonText"),
    },
    {
      id: "web-dev-service",
      category: t("categories.webDevelopment"),
      title: t("webDevService.title"),
      description: t("webDevService.description"),
      image: "/assets/product/app/soval-go-app/1.png",
      heroImage: "/assets/product/app/soval-go-app/1.png",
      buttonText: t("buttonText"),
    },
  ];
}

export function getProjectDetailData(t, id) {
  const projectMap = {
    "organization-Todo-System": {
      title: t("organizationTodoSystem.detailTitle"),
      description: t("organizationTodoSystem.detailDescription"),
      role: t("organizationTodoSystem.role"),
      heroImage: "/assets/product/app/todo/todo-admin-dashboard.png",
      technologies: [
        { category: t("categories.webDevelopment"), name: "Next.js" },
        { category: t("categories.webDevelopment"), name: "Tailwind CSS" },
        { category: t("categories.webDevelopment"), name: "Ant Design" },
        { category: t("categories.webDevelopment"), name: "NestJS" },
        { category: t("categories.webDevelopment"), name: "PostgreSQL" },
        { category: t("categories.webDevelopment"), name: "JWT" },
        { category: t("categories.webDevelopment"), name: "Git" },
      ],
      galleryImages: [
        "/assets/product/app/todo/todo-form-create.png",
        "/assets/product/app/todo/todo-admin-dashboard.png",
      ],
    },
    "solva-go-travel": {
      title: t("solvaGoTravel.detailTitle"),
      description: t("solvaGoTravel.detailDescription"),
      role: t("solvaGoTravel.role"),
      heroImage: "/assets/product/app/booking/home.png",
      technologies: [
        { category: t("categories.webDevelopment"), name: "Next.js" },
        { category: t("categories.webDevelopment"), name: "tailwindcss" },
        { category: t("categories.webDevelopment"), name: "Prisma" },
        { category: t("categories.webDevelopment"), name: "PostgreSQL" },
        { category: t("categories.webDevelopment"), name: "JWT" },
        { category: t("categories.webDevelopment"), name: "Git" },
      ],
      galleryImages: [
        "/assets/product/app/booking/home.png",
        "/assets/product/app/booking/staff.png",
        "/assets/product/app/booking/contact.png",
        "/assets/product/app/booking/form.png",
        "/assets/product/app/booking/gallery.png",
      ],
    },
    "web-dev-service": {
      title: t("webDevService.detailTitle"),
      description: t("webDevService.detailDescription"),
      role: t("webDevService.role"),
      heroImage: "/assets/product/app/soval-go-app/1.png",
      technologies: [
        { category: t("categories.webDevelopment"), name: "Vue.js" },
        { category: t("categories.webDevelopment"), name: "Vuetify" },
        { category: t("categories.webDevelopment"), name: "Laravel" },
        { category: t("categories.webDevelopment"), name: "MySQL" },
        { category: t("categories.webDevelopment"), name: "Git" },
      ],
      galleryImages: [
        "/assets/product/app/soval-go-app/1.png",
        "/assets/product/app/soval-go-app/2.png",
      ],
    },
  };
  return projectMap[id] || null;
}
