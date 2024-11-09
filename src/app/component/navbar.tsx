import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/LOGOS/AR ABDUL REHMAN Shaikh.png")}
              alt="ABDULREHMAN SHAIKH"
              width={100}
              height={100}
              className="w-[58px]"
            />
            <span className="ml-3 text-xl">ABDULREHMAN SHAIKH</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#Skill"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <Link href="../assets/MyCV/Abdulrehman Shaikh.pdf">
            <Button >
              Download CV
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
};


