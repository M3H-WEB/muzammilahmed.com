import React, { useState } from "react";
import bookstore1 from "../assets/img/bookstore1.jpg"
import bookstore2 from "../assets/img/bookstore2.jpg"
import bookstore3 from "../assets/img/bookstore3.jpg"
import bookstore4 from "../assets/img/bookstore4.jpg"
import bookstore5 from "../assets/img/bookstore5.jpg"
import bookstore6 from "../assets/img/bookstore6.jpg"
import bookstore7 from "../assets/img/bookstore7.jpg"
import bookstore8 from "../assets/img/bookstore8.jpg"
import bookstore9 from "../assets/img/bookstore9.jpg"
import bookstore10 from "../assets/img/bookstore10.jpg"
import appointment from "../assets/img/appointment.jpg"
import appointment2 from "../assets/img/appointment2.jpg"
import social1 from "../assets/img/social1.jpg"
import social2 from "../assets/img/social2.jpg"
import social3 from "../assets/img/social3.jpg"
import social4 from "../assets/img/social4.jpg"
import social5 from "../assets/img/social5.jpg"
import social6 from "../assets/img/social6.jpg"
import social7 from "../assets/img/social7.jpg"
import social8 from "../assets/img/social8.jpg"
import social9 from "../assets/img/social9.jpg"

function Experiance() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      id: 1,
      image: bookstore1,
      title: "BookStore",
      description: "A scalable e-commerce application with a modern UI and robust backend.",
      details:
        "Built using React, Node.js, and MongoDB. Includes Admin panel and User authentication, product management, and secure payment integration. Provides a seamless shopping experience with scalability in mind.",
      tags: ["e-commerce", "MERN", "Node.js"],
      images: [
        bookstore8, bookstore1, bookstore2, bookstore3,
        bookstore9, bookstore10, bookstore4,
        bookstore5, bookstore6, bookstore7,
      ],
    },
    {
      id: 2,
      image: appointment,
      title: "Appointment Calendar",
      description: "An intuitive full-stack application for managing appointments.",
      details:
        "Developed with the MERN stack and integrated with Socket.io for real-time updates. Features include appointment scheduling, calendar synchronization, and real-time communication.",
      tags: ["calendar", "Appointment"],
      images: [appointment, appointment2],
    },
    {
      id: 3,
      image: social2,
      title: "Social Media",
      description: "A feature-rich social networking platform with dynamic interactions.",
      details:
        "Built with Next.js and Tailwind CSS. Includes responsive design, dynamic project loading, and interactive features such as posts, friend requests, and user profiles.",
      tags: ["social media", "MERN", "Tailwind CSS"],
      images: [
         social2, social3,
        social4, social5, social6, social7, social8,
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">Featured Projects</h1>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-3">
          {projects.map((project) => (
            <div
              className="group relative overflow-hidden border rounded-lg shadow-md hover:shadow-xl transition duration-300"
              key={project.id}
            >
              <img
                src={project.image}
                className="w-full h-[200px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
                alt={project.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <button
                  onClick={() => openModal(project)}
                  className="inline-block mt-4 px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.details}</p>
            <div className="relative mb-4">
              <img
                src={selectedProject.images[currentImageIndex]}
                className="w-full h-[300px] object-cover rounded-lg"
                alt={`Image ${currentImageIndex + 1}`}
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
              >
                &rarr;
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold">Tags:</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiance;