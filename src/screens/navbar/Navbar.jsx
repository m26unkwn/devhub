/** @format */

import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { MobileNav } from "./mobile/MobileNav";

export const Navbar = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MobileNav />
    </>
  );
};
