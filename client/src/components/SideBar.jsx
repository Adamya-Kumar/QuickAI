import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  User,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icons: House },
  { to: "/ai/write-article", label: "Write Article", Icons: SquarePen },
  { to: "/ai/blog-title", label: "Blog Titles", Icons: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icons: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icons: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icons: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icons: FileText },
  { to: "/ai/community", label: "Community", Icons: User },
];

const SideBar = ({ sideBar, setSideBar }) => {
  const { user } = useUser();
  const { openUserProfile, signOut } = useClerk();
  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sideBar ? "translate-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full my-7">
        <img
          src={user.imageUrl}
          alt="user profile image"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="text-center font-semibold mt-2">{user.fullName}</h1>
        <div className="mt-5 px-6 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icons }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSideBar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icons
                    className={`h-4 w-4 ${isActive ? "text-white" : ""}`}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user.imageUrl}
            alt="user profile"
            className="w-7 rounded-full"
          />
          <div className="text-xs text-gray-600">
            <h2 className="font-medium text-black">{user.fullName}</h2>
            <Protect plan="premium" fallback="Free">
              Premium
            </Protect>{" "}
            Plan
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 cursor-pointer text-gray-300 hover:text-gray-700 transition"
        />
      </div>
    </div>
  );
};

export default SideBar;
