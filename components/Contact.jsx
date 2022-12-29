import React from "react";
import Image from "next/image";
import ContactImage from "../public/assets/contact.jpg";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch with me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Chris Pagan</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance positions. Contact me and
                  let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex items-center justify-center space-x-20 p-6">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://www.linkedin.com/in/chris-pagan/"><FaLinkedinIn /></a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/Chris-Pagan"><FaGithub /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form 
                action='https://getform.io/f/4ed4a94a-5409-433f-88b8-c798e89815bc'
                method='POST'
                enctype="multipart/form-data"
                >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                      type="text"
                      name='subject'
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea name="message" className="border-2 rounded-lg p-3 border-gray-300" rows='10'/>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send Me a Message</button>
              </form>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
