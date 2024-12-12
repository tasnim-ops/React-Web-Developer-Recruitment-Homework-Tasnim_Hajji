import React from "react";

import './App.css'; 


import { Router, Route, RootRoute, RouterProvider } from "@tanstack/react-router";
import ProductComponent from "./components/ProductComponent";

// Define the root route
const rootRoute = new RootRoute();

// Define the product route
const productRoute = new Route({
  getParentRoute: () => rootRoute,  //  this route is a child of rootRoute
  path: "/",                       
  component: ProductComponent,          // component to render
});

//  router instance created with root route and product route
const router = new Router({
  routeTree: rootRoute.addChildren([productRoute]),
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
