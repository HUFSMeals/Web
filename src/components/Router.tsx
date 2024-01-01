import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main/index";
import MyPage from "../pages/mypage";
import Notice from "../pages/notice";

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
]);

export default Router;
