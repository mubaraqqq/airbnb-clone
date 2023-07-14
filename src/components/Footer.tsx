"use client";

import { useMediaQuery } from "@mui/material";
import "@/styles/Footer.scss";
import {
  AccountCircle,
  FavoriteBorder,
  KeyboardArrowUp,
  Language,
  Search,
} from "@mui/icons-material";

const Footer = () => {
  const largeScreen = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {/* Tab and Desktop */}
      <footer className="tab-desktop px-[40px] hidden sm:flex justify-between items-center text-sm font-[#222222]">
        <div className="flex gap-[10px] flex-wrap max-w-[50%] font-light">
          <p>© 2023 Airbnb, Inc.</p> • <p>Terms</p> •<p>Sitemap</p> •{" "}
          <p>Privacy</p> •{" "}
          <p className="flex items-center gap-[5px]">
            Your Privacy Choices{" "}
            <svg width="26" height="12" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                fill="#fff"
              ></rect>
              <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
              <path
                d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                stroke="#06F"
                stroke-linecap="round"
              ></path>
              <path
                d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                stroke="#fff"
                stroke-linecap="round"
              ></path>
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                stroke="#06F"
              ></rect>
            </svg>
          </p>{" "}
          •<p>Destinations</p>
        </div>
        <div className="flex items-center gap-[15px] font-semibold">
          <div className="flex items-center gap-[5px]">
            <Language />
            <p>English (US)</p>
          </div>
          <div className="flex items-center gap-[5px]">
            $ <p>USD</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <p>Support & Resources</p>
            <KeyboardArrowUp />
          </div>
        </div>
      </footer>
      {/* Mobile */}
      <footer className="mobile flex justify-center sm:hidden gap-[30px]">
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <Search sx={{ color: "#b0b0b0", fontSize: "40px" }} />
          <p className="text-[10px] text-[#717171]">Explore</p>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <FavoriteBorder sx={{ color: "#b0b0b0", fontSize: "40px" }} />
          <p className="text-[10px] text-[#717171]">Wishlist</p>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <AccountCircle sx={{ color: "#b0b0b0", fontSize: "40px" }} />
          <p className="text-[10px] text-[#717171]">Profile</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
