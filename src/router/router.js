import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Main } from "../components/Main/Main";
import { PostDetails } from "../components/PostDetails/PostDetails";
import { PostPhotoDetails } from "../components/PostPhotoDetails/PostPhotoDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/details/photo/:id",
        element: <PostPhotoDetails />,
      },
      {
        path: "/details/post/:id",
        element: <PostDetails />,
      },
    ],
  },
]);

export default router;
