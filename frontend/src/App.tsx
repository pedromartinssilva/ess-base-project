import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTest from "./app/home/pages/CreateTest";
import ListTests from "./app/home/pages/ListTests";
import HelloWorld from "./app/home/pages/HelloWorld";
import PasswordRecovery from "./app/home/pages/Recovery";
import ChangePass from "./app/home/pages/ChangePass";

const router = createBrowserRouter([
  {
    path: "*",
    Component: CreateTest,
  },
  {
    path: "/create-test",
    Component: CreateTest,
  },
  {
    path: "/tests",
    Component: ListTests,
  },
  {
    path: "/hello-world",
    Component: HelloWorld,
  },
  {
    path: "/recovery",
    Component: PasswordRecovery,
  },
  {
    path: "/changepass",
    Component: ChangePass,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
