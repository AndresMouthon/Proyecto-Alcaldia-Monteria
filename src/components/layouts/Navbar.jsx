import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PATHS, RUTASRECTOR } from "../../models/rutasModels";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to={PATHS.RECTOR + "/" + RUTASRECTOR.HOME} className="flex ms-2 md:me-24">
              <img
                src="https://i.pinimg.com/236x/48/82/ac/4882ac5e3988487bc75764bc51ab237e.jpg"
                className="h-12 me-1"
                alt="Logo pendiente..."
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
                MANDOSED
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-white rounded-full"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="relative">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais"
                      alt=""
                    />
                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Usuario
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    andresdomingomouthon541@gmail.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li className="">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-blue-700 hover:bg-blue-700 hover:text-white"
                      role="menuitem"
                    >
                      <CgProfile className="h-5 w-5 mr-2" /> Mi cuenta
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white"
                      role="menuitem"
                    >
                      <RiLogoutCircleLine className="h-5 w-5 mr-2" /> Salir
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}