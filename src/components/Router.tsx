import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main/index";
import MyPage from "../pages/mypage";
import Notice from "../pages/notice";
import Login from "../pages/login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/notice",
    element: <Notice />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
