"use client";

import Image from "next/image";
import logo from "@/assets/airbnb-logos-495225.png";
import "@/styles/Navbar.scss";
import { AccountCircle, Language, Menu, Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
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
  );
};

export default Navbar;
