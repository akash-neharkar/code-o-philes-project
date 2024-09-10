import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from "./Components/Navbar/Layout";
import SignButton from "./Components/Navbar/SignButton";
import Dashboard from "./pages/Dashboard";
import Hero from "./Components/Hero/Hero";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignButton />} />
          <Route path="/" element={<Hero />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
