import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[40vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
