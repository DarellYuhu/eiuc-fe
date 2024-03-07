import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { dashboardPagesMenu, demoPagesMenu } from "../menu";
import Login from "../pages/presentation/auth/Login";

const LANDING = {
  DASHBOARD: lazy(
    () => import("../pages/presentation/dashboard/DashboardPage")
  ),
};

const AUTH = {
  PAGE_404: lazy(() => import("../pages/presentation/auth/Page404")),
};

const presentation: RouteProps[] = [
  /**
   * Landing
   */
  {
    path: dashboardPagesMenu.dashboard.path,
    element: <LANDING.DASHBOARD />,
  },

  /** ************************************************** */

  // ======================= Pages ========================

  // ======================= End Pages ========================

  /**
   * Auth Page
   */
  {
    path: demoPagesMenu.page404.path,
    element: <AUTH.PAGE_404 />,
  },
  {
    path: demoPagesMenu.login.path,
    element: <Login />,
  },
  {
    path: demoPagesMenu.signUp.path,
    element: <Login isSignUp />,
  },
];
const contents = [...presentation];

export default contents;
