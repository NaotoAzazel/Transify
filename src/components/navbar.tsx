import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Icons } from "@/components/Icons";
import NavItems from "@/components/navItems";
import { ModeToggle } from "./Toggle";

const Navbar = () => {
  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative border-b">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            <div className="ml-4 flex lg:ml-0">
              <Icons.logo className="h-10 w-10" />
            </div>

            <div className="z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <ModeToggle />
              </div>
            </div>

          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar;