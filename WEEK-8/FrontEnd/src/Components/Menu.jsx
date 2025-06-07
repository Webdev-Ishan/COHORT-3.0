import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountDropdown3() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="bg-gray-2  py-20 dark:bg-dark ">
      <div className="container">
        <div className="flex justify-center ">
          <div className="relative inline-block ">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className=" inline-flex h-6 items-center justify-center gap-2  p-2 text-xm font-bold   text-black "
            >
              Menu
              <span
                className={`duration-100 ${dropdownOpen ? "-scale-y-100" : ""}`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 top-full w-[240px] divide-y border-black border-2 divide-stroke overflow-hidden rounded-lg bg-white dark:divide-dark-3 dark:bg-dark-2 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-black   duration-300">
                  Account menu
                </p>
              </div>
              <div>
                <Link
                  to={"/Profile"}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300"
                >
                  View profile
                </Link>
                <Link
                  to={"/settings"}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300"
                >
                  Settings
                </Link>
              </div>
              <div>
                <Link
                  href="/profile/Company"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300"
                >
                  Company profile
                </Link>
                <Link
                  href="/members"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300"
                >
                  Team
                </Link>
              </div>
              <div>
                <Link
                  href="/help"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300"
                >
                  Support
                </Link>
              </div>
              <div>
                <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-black hover:bg-blue-600 hover:text-white duration-300">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
