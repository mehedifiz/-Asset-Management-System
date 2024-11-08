import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },  ],
    },
  ])