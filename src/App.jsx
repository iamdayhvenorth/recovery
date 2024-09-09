import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/Layouts";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>, // Default route when no other routes match
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
