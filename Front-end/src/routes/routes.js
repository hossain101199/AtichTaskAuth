import NotFoundPage from "../pages/NotFoundPage";
import Profile from "../pages/ProfilePage/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
  {
    path: "/sign-in",
    element: SignInPage,
  },
  {
    path: "/sign-up",
    element: SignUpPage,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];

export const excludeFooterPaths = ["/dashboard", "/profile"];
