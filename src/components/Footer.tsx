"use client";

import { useMediaQuery } from "@mui/material";
import "@/styles/Footer.scss";
import { KeyboardArrowUp, Language } from "@mui/icons-material";

const Footer = () => {
  const largeScreen = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {largeScreen ? (
        //   Tab and Desktop
        <footer className="tab-desktop px-[40px] flex justify-between sticky bottom-[0] z-[3] items-center text-sm font-[#222222]">
          <div className="flex gap-[10px] flex-wrap max-w-[50%] font-light">
            <p>© 2023 Airbnb, Inc.</p> • <p>Terms</p> •<p>Sitemap</p> •{" "}
            <p>Privacy</p> • <p>Your Privacy Choices</p> •<p>Destinations</p>
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
      ) : (
        //   Mobile
        <footer className="mobile"></footer>
      )}
    </>
  );
};

export default Footer;
