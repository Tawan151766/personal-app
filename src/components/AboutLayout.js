import { PageHeader, UnifiedNavigation } from "./index";

export default function AboutLayout({ children, onBackClick, onShareClick }) {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div>
        <PageHeader 
          showBackButton={true}
          showShareButton={true}
          onBackClick={onBackClick}
          onShareClick={onShareClick}
        />
        {children}
      </div>
      <div>
        <UnifiedNavigation />
        <div className="h-5 bg-slate-50"></div>
      </div>
    </div>
  );
}
