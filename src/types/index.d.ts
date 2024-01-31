export type SidebarNavItem = {
  title: string,
  href: string,
  disabled?: boolean
};

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
};