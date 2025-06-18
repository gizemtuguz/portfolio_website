import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-4xl text-left w-full capitalize text-purple-500 text-bold">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Motivated and ambitious Computer Engineering student with a robust foundation in software development, technical projects, and collaborative design. Driven by a passion for game programming and machine learning, I excel in leveraging programming expertise, project management skills, and teamwork to deliver innovative solutions. 
          A fast learner with an insatiable curiosity, I thrive on exploring and mastering next-generation tools and technologies, staying ahead in the ever-evolving tech landscape. I am deeply committed to fostering innovation, embracing challenges, and driving continuous personal and professional growth. Eager to contribute as a software developer, I aim to build impactful and forward-thinking solutions that make a difference.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-purple-300"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Machine Learning
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-purple-300"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Game Development
          </p>
        </ItemLayout>


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=apple,blender,cs,css,flask,git,github,html,java,js,maven,mysql,notion,npm,py,pytorch,stackoverflow,sklearn,tailwind,tensorflow,unity,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;