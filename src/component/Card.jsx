import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import spaceImg from "../assets/Space.jpg";
import mountainImg from "../assets/mountain.jpg";
import bachImg from "../assets/beach.jpg";
import BG from "../assets/BG.jpg";

function CardUI() {
  const [backgroundImg, setBackgroundImg] = useState(`url(${BG})`);
  const [cardImg, setCardImg] = useState(img1);
  const [cardBorder, setCardBorder] = useState("");
  const [cadShadow, setCadShadow] = useState("");

  const removeCardImg = () => {
    setCardImg(null);
  };
  return (
    <div
      className="relative flex flex-col md:flex-row justify-between items-center py-6 px-4 gap-8 h-auto min-h-screen bg-cover bg-center"
      style={{ backgroundImage: backgroundImg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LEFT CARD */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <div
          className={`w-[92%] sm:w-[80%] md:w-[75%] lg:w-[55%] xl:w-[40%] rounded-2xl p-4 bg-white ${cardBorder} ${cadShadow}`}
        >
          <div className="flex justify-center">
            <img src={cardImg} alt="img" className="rounded w-full" />
          </div>

          <h2 className="text-center font-bold text-xl mt-2">Pardeep</h2>

          <p className="text-center text-sm mt-2 leading-relaxed">
            I am a dedicated React developer skilled in creating responsive,
            user-friendly web applications. I focus on clean code, smooth UI/UX,
            and building performance-optimized projects using modern tools and
            Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/pardeep404"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition duration-200"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/pardeep0793"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition duration-200"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end text-amber-300">
        <div className="relative w-full max-w-[520px] flex flex-col gap-4 rounded">
          <div className="absolute inset-0 bg-black/25 rounded"></div>
          {/* CARD IMAGE OPTIONS */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">BG Image</legend>

            <button
              onClick={() => setBackgroundImg(`url(${spaceImg})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Space
            </button>
            <button
              onClick={() => setBackgroundImg(`url(${mountainImg})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Mountain
            </button>
            <button
              onClick={() => setBackgroundImg(`url(${bachImg})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Beach
            </button>
            <button
              onClick={() => setBackgroundImg(`url(${spaceImg})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Solid
            </button>
            <button
              onClick={() => setBackgroundImg(`url(${Gradient})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Gradient
            </button>
            <button
              onClick={() => setBackgroundImg(`url(${Upload})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Upload
            </button>
          </fieldset>

          {/* IMAGE SELECT */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">Card Image</legend>

            <button
              onClick={() => setCardImg(img1)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Image 1
            </button>
            <button
              onClick={() => setCardImg(img2)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Image 2
            </button>
            <button
              onClick={() => setCardImg(img3)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Image 3
            </button>
            <button
              onClick={() => setCardImg(removeCardImg)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Remove
            </button>
            <button
              onClick={() => setCardImg(`url(${Upload})`)}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Upload
            </button>
          </fieldset>

          {/* THEMES */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">Card Themes</legend>

            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Theme 1
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Theme 2
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Theme 3
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Theme 4
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Theme 5
            </button>
          </fieldset>

          {/* BORDER */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">Card Border</legend>
            <button
              onClick={() => setCardBorder("border border-black-500")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Thin
            </button>
            <button
              onClick={() => setCardBorder("border-2 border-gray-600")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Medium
            </button>
            <button
              onClick={() => setCardBorder("border-4 border-gray-700")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Thick
            </button>
            <button
              onClick={() =>
                setCardBorder("border-2 border-dashed border-black")
              }
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Dashed
            </button>
            <button
              onClick={() =>
                setCardBorder("border-4 border-double border-black")
              }
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Double
            </button>
            <button
              onClick={() => setCardBorder("none")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              None
            </button>
          </fieldset>

          {/* SHAPE */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">Card Shape</legend>

            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Rounded
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Square
            </button>
            <button className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200">
              Circle
            </button>
          </fieldset>

          {/* SHADOW */}
          <fieldset className="shadow p-2 rounded-lg flex flex-wrap justify-center items-center gap-2 relative z-10">
            <legend className="px-2 text-sm font-semibold">Card Shadow</legend>
            <button
              onClick={() => setCadShadow("shadow-sm")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Soft
            </button>
            <button
              onClick={() => setCadShadow("shadow-md")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Medium
            </button>
            <button
              onClick={() => setCadShadow("shadow-lg")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Deep
            </button>
            <button
              onClick={() =>
                setCadShadow("shadow-[0_0_20px_rgba(255,255,255,0.6)]")
              }
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              Glow
            </button>
            <button
              onClick={() => setCadShadow("none")}
              className="border px-4 py-1.5 rounded-2xl text-sm cursor-pointer hover:scale-101 transition duration-200"
            >
              None
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default CardUI;
