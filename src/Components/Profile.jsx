import React from "react";
import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaStar,
  FaUserAlt,
  FaLinkedinIn,
  FaBehance,
  FaComments,
  FaDribbble,
} from "react-icons/fa";
import img from "./../Img/profilepic.jpg";

const Profile = () => {
  return (
    <div>
      <main className="container py-14">
        <div className="flex flex-row gap-x-5">
          <div className="flex-none w-40 h-40">
            <img
              src={img}
              className="w-40 h-40 rounded-full border-4 backdrop-blur-md transition duration-300 border-[#080d14]/30"
              alt="Profile"
            />
          </div>
          <div className="flex-col">
            <div>
              <h1 className="text-3xl text-[#000000] font-medium font-['Fonarto']">
                Hi, I’m <span className="text-[#3a8ef5]">Devansh </span>
                Variya👋
              </h1>
            </div>

            <p className="text-lg font-medium mt-2 text-[#000000]">
              I'm a full-stack web developer and UX/UI designer, passionate
              about impactful, user-centered experiences, with a hobby in
              high-level programming.
            </p>
            <div className="flex py-5 font-bold">
              <a href="https://github.com/DevDevansh12">
                <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] m-2 p-2">
                  <FaGithub />
                  GitHub
                </button>
              </a>
              <a href="https://x.com/DevanshVariyaa">
                <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff]  m-2 p-2">
                  <FaTwitter />
                  Twitter
                </button>
              </a>
              <a href="https://www.linkedin.com/in/devansh-variya/">
                <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0072b1] text-[#fff]  m-2 p-2">
                  <FaLinkedinIn />
                  LinkedIn
                </button>
              </a>
              <a href="https://www.behance.net/devanshvariya1">
                <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#030303] text-[#fff]   m-2 p-2">
                  <FaBehance />
                  Behance
                </button>
              </a>
              <a href="https://dribbble.com/DevanshDev">
                <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#EA4C89] text-[#fff]  m-2 p-2">
                  <FaDribbble />
                  Dribbble
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
