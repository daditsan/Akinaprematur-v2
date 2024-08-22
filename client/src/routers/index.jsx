import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import GamePage from "../pages/GamePage/GamePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
              return redirect("/game");
            }
            return null;
        }
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: "/register",
        element: <RegisterPage />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
              return redirect("/game");
            }
            return null;
        }
    },
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
              return redirect("/game");
            }
            return null;
        }
    },
    {
        loader: () => {
        if (!localStorage.getItem("access_token")) {
          return redirect("/login");
        }
        return null;
      },
      children: [
        {
            path: "/game",
            element: <GamePage />
        },
        {
            path: "/profile",
            element: <ProfilePage />
        },
        {
            path: "/editprofile",
            element: <EditProfilePage />
        },
      ]
    }
])

export default router;