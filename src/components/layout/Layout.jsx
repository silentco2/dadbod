import { useState } from "react";
import "./LayoutStyles.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  const [isCollapsed, setCollapse] = useState(false);
  return (
    <>
      <Header setCollapse={setCollapse} />
      <Navbar isCollapsed={isCollapsed} />
      <main><Outlet/></main>
      <footer></footer>
    </>
  );
}

export default Layout;
