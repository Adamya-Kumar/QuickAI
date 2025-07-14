import  { useState } from "react";
import { Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SideBar from "../components/SideBar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const naviagte = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const { user } = useUser();
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-300 shadow">
        <img
          className="w-32 sm:w-44 cursor-pointer"
          src={assets.logo}
          alt="logo"
          onClick={() => naviagte("/")}
        />
        {sideBar ? (
          <X
            onClick={() => setSideBar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSideBar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
