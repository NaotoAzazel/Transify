import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Главная",
      href: "transfer"
    },
    {
      title: "С ютуба в спотифай",
      href: "transfer/youtube-to-spotify"
    },
    {
      title: "С спотифай в ютуб",
      href: "transfer/spotify-to-youtube",
      disabled: true
    }
  ]
}