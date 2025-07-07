"use client";

export default function SocialLinks({ links = [], title = "Connect with me" }) {
  const defaultLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", color: "bg-[#e7edf4] text-[#0d141c]" },
    { name: "GitHub", href: "https://github.com", color: "bg-[#e7edf4] text-[#0d141c]" }
  ];

  const socialLinks = links.length > 0 ? links : defaultLinks;

  const handleSocialClick = (link) => {
    if (link.href) {
      window.open(link.href, '_blank');
    }
  };

  return (
    <div>
      <h3 className="text-[#0d141c] text-lg lg:text-xl font-bold leading-tight tracking-[-0.015em] px-4 lg:px-6 pb-2 pt-4 lg:pt-6">
        {title}
      </h3>
      <div className="flex justify-center lg:justify-start">
        <div className="flex flex-1 gap-3 lg:gap-4 flex-wrap px-4 lg:px-6 py-3 max-w-[480px] lg:max-w-2xl justify-center lg:justify-start">
          {socialLinks.map((link, index) => (
            <button 
              key={index}
              onClick={() => handleSocialClick(link)}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 lg:h-12 px-4 lg:px-6 ${link.color || 'bg-[#e7edf4] text-[#0d141c]'} text-sm lg:text-base font-bold leading-normal tracking-[0.015em] grow`}
            >
              <span className="truncate">{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
