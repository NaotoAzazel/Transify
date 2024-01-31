import { PRODUCT_CATEGORIES } from "@/config";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
  category: Category
}

const NavItem = ({ category }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Link href={category.featured[0]?.href} className={cn(buttonVariants({ variant: "ghost" }), "gap-1.5")}>{category.label}</Link>
      </div>
    </div>
  )
}

export default NavItem;