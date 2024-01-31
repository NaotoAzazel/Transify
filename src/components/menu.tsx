import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { SidebarNav } from "@/components/nav";
import { dashboardConfig } from "@/config/nav";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icons.menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-heading">Меню</SheetTitle>
        </SheetHeader>

        <SidebarNav items={dashboardConfig.sidebarNav} />
      </SheetContent>
    </Sheet>
  )
}