import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main/index";
import MyPage from "../pages/mypage";
import Notice from "../pages/notice";
import Login from "../pages/login";
import Shop from "../pages/shop";
import SearchResult from "../pages/search/searchResult";
import CreateReview from "../pages/review/createReview";

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
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/searchResult",
    element: <SearchResult />,
  },
  {
    path: "/createReview",
    element: <CreateReview />,
  },
]);

export default Router;
