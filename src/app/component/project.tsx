import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 mt-[5rem]">
            {/* {Projects} */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/MyProject/MResume.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Static Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Static Resume
                  </h1>
                  <p className="leading-relaxed">
                    This is the project which I've created for practice and learning.
                  </p>
                  <Link href={"https://milestone-1-abdulrehman-shaikhs-projects.vercel.app/"}>
                  <p className="leading-relaxed text-blue-500 mb-1 hover:underline"> View Project.. </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

