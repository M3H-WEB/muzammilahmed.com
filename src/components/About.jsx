import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
<div>
  <h1 className="text-3xl font-bold mb-5">About Me</h1>
  <p>
    Hello, I'm <strong>Muzammil Ahmed</strong>, a passionate web developer specializing in the <strong>MERN stack</strong>. With over 5 years of experience in <strong>Graphic designing</strong> and 3 years in development, I create impactful and visually stunning software solutions. Currently pursuing a <strong>BS in Computer Science</strong> at Government College University Hyderabad <strong>(2023-2026)</strong>, I am driven to craft innovative applications that leave a lasting impression.                                   
  </p>
  <br />
  
  <h1 className="text-green-600 font-semibold text-xl">
    Education & Training
  </h1>
  <span>
    <strong>Undergraduate:</strong> BS Computer Science<br />
    <strong>Institution:</strong> Government College University Hyderabad<br />
    <strong>Duration:</strong> 2023-2026
  </span>
  <br />
  <br />
  
  <h1 className="text-green-600 font-semibold text-xl">
    Skills & Expertise
  </h1>
  <ul className="list-disc list-inside">
    <li>Proficient in MERN Stack (MongoDB, Express, React, Node.js)</li>
    <li>Experienced in front-end and back-end development</li>
    <li>Excellent problem-solving skills</li>
    <li>Effective communication and collaboration</li>
    <li>Strong foundation in HTML, CSS, JavaScript, and modern frameworks</li>
  </ul>
  <br />
             <h1 className="text-green-600 font-semibold text-xl">
    Mission Statement
  </h1>
  <p>
    My mission is to leverage my technical expertise and creative vision to deliver innovative web development solutions that exceed expectations and positively impact the digital landscape. I am committed to continuous learning, embracing new challenges, and driving progress in the tech world.
  </p>
</div>
 
    </div>
  );
}

export default About;
