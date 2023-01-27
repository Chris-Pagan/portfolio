import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png"

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaMastodon } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/weather' ||
      router.asPath === '/blog' ||
      router.asPath === '/project3' ||
      router.asPath === '/project4'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#1f2937');
      setLinkColor('#ecf0f3');
    }
  }, [router]);



  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="the letters CP colored purple"
            width="64"
             height="128"
              className="pt-2"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#1f2937] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="/"
                  width="50"
                  height="50"
                  className="rounded-full overflow-hidden"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Time to build something fun
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <AiOutlineGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaMastodon />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
