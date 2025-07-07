import { PageHeader, UnifiedNavigation } from "./index";

export default function AboutLayout({ children, onBackClick, onShareClick }) {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden max-w-[430px] mx-auto md:max-w-none md:flex-row"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Desktop/Tablet Sidebar Navigation */}
      <div className="hidden md:flex md:flex-col md:w-64 lg:w-80 md:bg-white md:border-r md:border-[#e7edf4]">
        <div className="md:p-6">
          <PageHeader 
            showBackButton={false}
            showShareButton={true}
            onShareClick={onShareClick}
          />
        </div>
        <div className="md:flex-1 md:px-6">
          <UnifiedNavigation className="md:flex-col md:border-none md:p-0 md:bg-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden">
          <PageHeader 
            showBackButton={true}
            showShareButton={true}
            onBackClick={onBackClick}
            onShareClick={onShareClick}
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 md:p-6 lg:p-8">
          {children}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <UnifiedNavigation />
          <div className="h-5 bg-slate-50"></div>
        </div>
      </div>
    </div>
  );
}
