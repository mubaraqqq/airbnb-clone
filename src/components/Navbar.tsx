"use client";

import Image from "next/image";
import logo from "@/assets/airbnb-logos-495225.png";
import "@/styles/Navbar.scss";
import {
  AccountCircle,
  Language,
  Menu,
  Search,
  Tune,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const largeScreen = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {largeScreen ? (
        // Desktop & Tablet Screen
        <nav className="nav-desktop flex justify-between items-center">
          <Image src={logo} alt="logo" />
          <div className="search-bar-container w-[auto] pr-[5px] pl-[20px] py-[10px] flex justify-between items-center gap-3 text-sm rounded-[40px]">
            <p>Anywhere</p> <p>Any week</p> <p>Add guests</p>
            <Search
              sx={{
                bgcolor: "#FF385C",
                borderRadius: "50%",
                padding: "5px",
                color: "#ffffff",
                fontSize: "30px",
              }}
            />
          </div>
          <div className="profile-container flex items-center gap-2">
            <p className="font-semibold text-sm">Airbnb your home</p>
            <Language sx={{ color: "#616161", fontSize: "45px" }} />
            <div className="profile flex items-center gap-1">
              <Menu sx={{ color: "#5b5a5a" }} />
              <AccountCircle sx={{ color: "#767676", fontSize: "30px" }} />
            </div>
          </div>
        </nav>
      ) : (
        // Mobile Screen
        <div className="nav-mobile flex items-center">
          <div className="flex items-center gap-3">
            <Search />
            <div className="flex flex-col">
              <p className="text-sm font-bold">Anywhere</p>
              <p className="text-xs font-light text-[#717171]">
                Any week • Add guests
              </p>
            </div>
            <Tune sx={{ fontSize: "40px" }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
