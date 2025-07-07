"use client";
import { Layout, ProfileCard } from "../components";

export default function Home() {
  const handleViewWork = () => {
    window.location.href = "/product";
  };

  return (
    <Layout>
      <ProfileCard onButtonClick={handleViewWork} />
    </Layout>
  );
}
