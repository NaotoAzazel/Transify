"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "@/components/navItem";

const NavItems = () => {
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => 
        <NavItem category={category} key={i} />
      )}
    </div>
  )
}

export default NavItems;