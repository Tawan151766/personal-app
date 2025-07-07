"use client";
import { Layout, ProfileCard } from "../components";

export default function Home() {
  const handleViewWork = () => {
    // Add navigation logic here
    console.log("View My Work clicked");
  };

  return (
    <Layout>
      <ProfileCard onButtonClick={handleViewWork} />
    </Layout>
  );
}
