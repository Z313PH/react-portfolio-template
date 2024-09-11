import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Passionate Software Engineer, skilled in Java, C/C#/C++, python and other programming languages, I thrive on tackling complex coding challenges and crafting innovative solutions. With a deep understanding of software development methodologies acquired from my Computer Science coursework and my internship at the Southern Utah University VR/AR Innovation Studio and Integrated Process Systems, Inc. as a Software Engineer.I have a drive for optimizing code for maximum performance and efficiency. Collaborative by nature, I am good at working in close collaboration with a good use and knowledge of collaboration software such as GitHub, Jira, and ClickUp. Although I am pursuing a bachelor's degree in Computer Science, I have a strong interest in electronics and have gained through multiple personal projects a noticeable amount of skills in Arduino."}
      </p>
    </div>
  );
};

export default ServiceCard;
