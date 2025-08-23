import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
