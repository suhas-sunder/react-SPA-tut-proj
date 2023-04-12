import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {
    const events = useLoaderData();
    console.log(events);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
