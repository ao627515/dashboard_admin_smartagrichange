import { DashboardPage, ErrorPage, LoginPage } from "../../views/pages"

export const links = {
  dashboard: "/",
  error: "/*",
  login: "/login"
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
  {
    path: links.login,
    Component: LoginPage
  }
]