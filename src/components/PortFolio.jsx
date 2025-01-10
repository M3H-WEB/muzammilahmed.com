import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "A NoSQL database designed for scalability and flexibility."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description: "A minimal and flexible Node.js web application framework."
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "A JavaScript library for building user interfaces."
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description: "A runtime environment for executing JavaScript on the server."
    },
    {
      id: 5,
      logo: html,
      name: "HTML",
      description: "The standard markup language for creating web pages."
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
      description: "A style sheet language used for designing web pages."
    },
    {
      id: 7,
      logo: javascript,
      name: "JavaScript",
      description: "A programming language used to create dynamic web content."
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p>
          I've more than 2 years of experience working with the following technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] flex flex-col justify-evenly border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
