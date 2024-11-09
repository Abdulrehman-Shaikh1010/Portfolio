"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button"


export const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-cover bg-center custom-image bg-fixed">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Graphic Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed text-black">
           Hi, I’m Abdulrehman—a Frontend engineer passionate
          about building beautiful, functional web apps 
          with Next.js, TypeScript, and Tailwind CSS. 
          Let’s create something amazing!
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <Button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={700}
            height={500}
            src={require("../../../public/assets/MyPhoto/Photo.jpg")}
          />
        </div>
      </div>
    </section>
  );
};