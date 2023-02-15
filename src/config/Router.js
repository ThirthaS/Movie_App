import Home from "../pages/Home";
import Detail from "../pages/Detail";

// All routes will be added here for maintainability
export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <Detail />,
    title: "Detail",
    isHeaderElement: false,
  },
];
