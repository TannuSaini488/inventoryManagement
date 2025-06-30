import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "./screens/dashboard/DashBoardLayout.jsx";
import LoginScreen from "./screens/login/LoginScreen.jsx";
import SignupScreen from "./screens/login/SignupScreen.jsx";
import DashBoardScreen from "./screens/dashboard/DashBoardScreen.jsx";

import AuthLayout from "./screens/login/AuthLayout.jsx";
import InventoryFormScreen from "./screens/InventoryFormScreen.jsx";
import ProductInfoScreen from "./screens/product/ProductInfoScreen.jsx";
import AddNewProductScreen from "./screens/product/AddNewProductScreen.jsx";
import ProductEditScreen from "./screens/product/ProductEditScreen.jsx";
import ProductsScreen from "./screens/product/ProductsScreen.jsx";
import LocationsScreen from "./screens/locations/LocationsScreen.jsx";
import NewLocationScreen from "./screens/locations/NewLocationScreen.jsx";
import EditLocationScreen from "./screens/locations/EditLocationScreen.jsx";

import BrandsScreen from "./screens/brands/BrandsScreen.jsx";
import NewBrandsScreen from "./screens/brands/NewBrandsScreen.jsx";
import EditBrandsScreen from "./screens/brands/EditBrandsScreen.jsx";
import UserManagementScreen from "./screens/users/UserManagementSystem.jsx";
import ProductHistoryScreen from "./screens/product/ProductHistoryScreen.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "",
        element: <DashBoardScreen />,
      },
      // {
      //   path: "add-item",
      //   element: <AddItemScreen />,
      // },
      {
        path: "add-product",
        element: <InventoryFormScreen />,
      },
      {
        path: "products/:id",
        element: <ProductInfoScreen />,
      },
      {
        path: "products/:id/edit",
        element: <ProductEditScreen />,
      },

      // new routes

      {
        path: "/products",
        element: <ProductsScreen />,
      },
      { path: "/products/new", element: <AddNewProductScreen /> },
      { path: "/products/edit/:id", element: <ProductEditScreen /> },
      { path: "/products/history/:id", element: <ProductHistoryScreen /> },

      //  brands

      {
        path: "/brands",
        element: <BrandsScreen />,
      },
      {
        path: "/brands/new",
        element: <NewBrandsScreen />,
      },
      {
        path: "/brands/edit/:id",
        element: <EditBrandsScreen />,
      },

      // locations
      {
        path: "/locations",
        element: <LocationsScreen />,
      },
      {
        path: "/locations/new",
        element: <NewLocationScreen />,
      },
      {
        path: "/locations/edit/:id",
        element: <EditLocationScreen />,
      },
      // users
      {
        path: "/users",
        element: <UserManagementScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <LoginScreen />,
      },
      {
        path: "signup",
        element: <SignupScreen />,
      },
    ],
  },
]);

export default router;
export const SERVER_URL =
  import.meta.env.VITE_MODE === "DEV"
    ? import.meta.env.VITE_LOCAL
    : import.meta.env.VITE_SERVER;
