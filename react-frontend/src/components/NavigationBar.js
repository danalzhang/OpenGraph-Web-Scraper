import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles.css";

function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <nav class="stick z-50 bg-black">
          <div class="mx-auto px-5">
            <div class="flex justify-between">
              <div class="flex space-x-4">
                <div class="mr-4">
                  <li class="flex items-center py-4 px-2 text-white">
                    <svg
                      class="h-10 w-10 mr-2 text-blue-500 mr-1 cursor-default"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                    <span class="font-bold px-1 cursor-default">
                      OpenGraph Web Scraper
                    </span>
                  </li>
                </div>
                <div class="flex items-center space-x-1"></div>
              </div>

              <div class="hidden md:flex flex items-center space-x-1">
                <a
                  href="/"
                  class="py-4 px-2 text-white hover:text-gray-500"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
                <a
                  href="/documentation"
                  class="py-4 px-2 text-white hover:text-gray-500"
                  onClick={() => navigate("/documentation")}
                >
                  Documentation
                </a>
                <a
                  href="/tryme"
                  class="py-4 px-2 text-white hover:text-gray-500"
                  onClick={() => navigate("/tryme")}
                >
                  Demo
                </a>
              </div>

              <div class="mobile-menu-button md:hidden flex items-center">
                <button onClick={handleMobileMenuToggle}>
                  <svg
                    class="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* mobile menu */}
            <div class={isMobileMenuOpen ? "block" : "hidden"}>
              <a
                href="/"
                class="block py-2 px-4 text-white hover:text-gray-500"
                onClick={() => navigate("/")}
              >
                Home
              </a>
              <a
                href="/documentation"
                class="block py-2 px-4 text-white hover:text-gray-500"
                onClick={() => navigate("/documentation")}
              >
                Documentation
              </a>
              <a
                href="/tryme"
                class="block py-2 px-4 text-white hover:text-gray-500"
                onClick={() => navigate("/tryme")}
              >
                Demo
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar;
