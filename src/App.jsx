import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Error } from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
    index: true,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
