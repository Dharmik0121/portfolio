/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const projects = [
  {
    title: "Billing Software",
    description: "Invoice creation with GST, product selection, and PDF download.",
    images: [
      "/bi-1.png",
      "/bi-2.png",
      "/bi-3.png",
      "/bi-4.png",
      "/bi-5.png",
      "/bi-6.png",
      "/bi-7.png",
    ],
    link: "https://billcarft.onrender.com"
  },
  {
    title: "Image Generator",
    description: "AI-generated art using prompts, credits, and download options.",
    images: [
      "/ex-1.png",
      "/ex-2.png",
      "/ex-3.png",
      "/ex-4.png",
      "/ex-5.png",
    ],
    link: "https://expense-frontend-evgk.onrender.com"
  },
  {
    title: "Image Generator",
    description: "AI-generated art using prompts, credits, and download options.",
    images: [
      "/saas-1.png",
      "/saas-2.png",
      "/saas-3.png",
      "/saas-4.png",
      "/saas-5.png",
    ],
    link: "https://saas-imagegeneration-1.onrender.com"
  },
];

const Projects = () => {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id="Projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
      <div className="relative w-full h-48 bg-black">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentImgIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default Projects;
