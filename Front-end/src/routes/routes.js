import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
  {
    path: "/",
    element: HomePage,
  },
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
];
