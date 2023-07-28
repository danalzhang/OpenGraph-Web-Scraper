// homepage.js
import React from "react";
import "../styles.css";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-700 overflow-hidden">
      <h1 className="mb-2 font-mono text-7xl text-black md:text-7xl font-bold">
        Web Scraping, <br className="block md:hidden" />
        <span className="relative">
          <span className="h-20 pt-5 overflow-x-hidden whitespace-nowrap text-brand-accent text-white font-bold">
            Made Easy.
          </span>
          <span className="cursor absolute -bottom-1 left-0 -top-1 inline-block bg-indigo-700 w-full animate-type will-change"></span>
        </span>
      </h1>
      <div className="pt-5">
        <button className="text-2xl text-white md:text-4xl hover:underline relative">
          Learn More.
          <span className="absolute h-1 w-full bg-white bottom-0 left-0 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
