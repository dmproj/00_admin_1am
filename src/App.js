import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home";
import Userslist from "./pages/Userlist/UsersList";
import User from "./pages/UserPage/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Userslist />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/newuser",
        element: <NewUser />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      // {
      //   path: "/newuser",
      //   element: <NewUser />,
      // },
      // {
      //   path: "/newuser",
      //   element: <NewUser />,
      // },
    ],
  },
]);

function Layout() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
