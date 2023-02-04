import React from "react";
import Image from "next/image";
import Link from "next/link";
import weatherApp from "../public/project_images/Weather_App.png";
import { RiRadioButtonFill } from "react-icons/ri";
export const project1 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  bg-black/80 z-10" />
        <Image className="absolute z-1" fill style src={weatherApp} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Weather App</h2>
          <h3>React / Next.JS / Tailwind CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Simple Weather App</p>
          <h2>Overview</h2>
          <p className="pb-3">
            This is a simple weather app that displays the current temperature.
            It also displays the humidity, wind speed, and an image that shows
            sky conditions.The background comes from{" "}
            <a href="https://unsplash.com" className="underline">
              Unsplash
            </a>
            . The weather information comes from{" "}
            <a href="https://openweathermap.org/api" className="underline">
              OpenWeatherMap
            </a>{" "}
            API. This app still has some additional features that I want to add,
            including having the background image change depending on the
            weather.
          </p>
          <p className="pb-3">
            This was fun to build out, and I learned how to research api
            documentation when looking for specific answers to questions.{" "}
          </p>
          <p>The app is deployed on Vercel and code is hosted on Github.</p>
          <a href="https://simple-weather-app-xi.vercel.app">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/Chris-Pagan/simple_weather_app">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-500 rounded-xl p-4">
          <div className="p-1">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:gird-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              {/* <p className="text-gray-200 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p> */}
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.JS
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project1;
