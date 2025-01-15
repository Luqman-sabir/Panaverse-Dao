import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '/public/images/panaverse-logo.webp'
const Footer = () => {
  return (
    <div className="">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-between items-center md:text-left text-center order-first">
            <div className=" max-w-xl px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-black">
                <Image src={logo} alt="logo" height={100} width={100} className="w-40" />
              </h2>
              <nav className="list-none mb-10 ">
               <p className="text-lg mt-10 ">
               Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you
                Learn Program Getting Ready for the Next Generation of the Internet
               </p>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full h- px-4">
              <h2 className="scroll-m-20 text-lg font-bold  text-black">
                Programs
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Web 3.0 and Metaverse Developer
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Cloud-Native Computing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Ambient Computing and IoT
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Genomics and Bioinformatics
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Network Programmability and Automation
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-black">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold tracking-tight text-black-100"
                    href={"/"}
                  >
                    cookie policy
                  </Link>
                </li>
              </nav>
            </div>
         
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Panaverse dao</span>
            </a>
            <p className="text-xs font-semibold tracking-tight text-black-100sm:ml-6 sm:mt-0 mt-4">
              © 2024 Code by.LUQMAN
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              ></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
