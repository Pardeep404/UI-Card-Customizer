import React from "react";
import { ChevronLeft, Github, Linkedin } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="flex justify-around py-5 fixed top-0 left-0 w-full h-16 shadow z-50">
        <div>
          <button type="button" className="cursor-pointer">
            <ChevronLeft />
          </button>
        </div>
        <div className="flex items-center gap-10">
          <button
            type="button"
            className="cursor-pointer hover:text-blue-500 transition-transform duration-700"
          >
            <Github />
          </button>
          <button
            type="button"
            className="cursor-pointer hover:text-blue-500 transition-transform duration-700"
          >
            <Linkedin />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
