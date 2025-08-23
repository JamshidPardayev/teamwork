import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="min-h-[40vh]">
        <Outlet />
      </main>
    </>
  );
};

export default React.memo(Layout);
