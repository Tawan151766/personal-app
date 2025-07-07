"use client";

import { ContactLayout, ContactForm, SocialLinks } from "../../components";

export default function ContactPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add form submission logic here
    // e.g., send to API endpoint, show success message, etc.
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/your-profile", 
      color: "bg-[#0077b5] text-white" 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/your-username", 
      color: "bg-[#333] text-white" 
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/your-handle", 
      color: "bg-[#1da1f2] text-white" 
    }
  ];

  return (
    <ContactLayout onBackClick={handleBackClick}>
      <ContactForm onSubmit={handleFormSubmit} />
      <SocialLinks 
        links={socialLinks}
        title="Connect with me"
      />
    </ContactLayout>
  );
}
