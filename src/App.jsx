import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/Layouts";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import TradingScam from "./pages/TradingScam";
import BinaryOptions from "./pages/BinaryOptions";
import CryptoCurrency from "./pages/CryptoCurrency";
import MtFraud from "./pages/MtFraud";
import Forex from "./pages/Forex";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/cfd-trading-scam",
        element: <TradingScam />,
      },
      {
        path: "/binary-options",
        element: <BinaryOptions />,
      },
      {
        path: "/crypto-currency",
        element: <CryptoCurrency />,
      },
      {
        path: "/mt760-mt799-fraud",
        element: <MtFraud />,
      },
      {
        path: "/forex",
        element: <Forex />,
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
