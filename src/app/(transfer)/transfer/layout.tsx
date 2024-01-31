import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SidebarNav } from "@/components/nav";
import { dashboardConfig } from "@/config/nav";

interface TranferLayoutProps {
  children: React.ReactNode
}

const TranferLayout = ({ children }: TranferLayoutProps) => {
  return (
    <div className="flex max-h-screen flex-col">
      <MaxWidthWrapper>
        <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr] my-7">
          <aside className="hidden w-200px flex-col md:flex">
            <SidebarNav items={dashboardConfig.sidebarNav} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </MaxWidthWrapper>
    </div>
  ) 
}

export default TranferLayout;