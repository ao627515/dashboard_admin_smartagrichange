import { DashboardPage, ErrorPage } from "../../views/pages"

export const links = {
  dashboard: "/",
  error: "/*",
}

export const routes = [
  {
    path: links.dashboard,
    Component: DashboardPage,
  },
  {
    path: links.error,
    Component: ErrorPage
  },
]