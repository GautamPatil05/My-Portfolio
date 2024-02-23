import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Web Application Development Internship
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                R3sys System India Private Limited
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                July 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                In July 2023, I completed an internship at R3sys System India Private Limited, focusing on Web Application Development. I gained hands-on experience with Java, Servlets, JSP, MySQL, and front-end technologies like HTML, CSS, JavaScript, and Bootstrap. Throughout this internship, I learned to develop and integrate dynamic web applications, emphasizing user experience and data management.
                </p>
              </div>
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Java Development Internship
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Oasis Infobyte
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                April 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Throughout my Java Development Internship at Oasis Infobyte in April 2023, I focused on honing my Java programming skills, culminating in the development of two key projects: a Number Guessing Game and a Bank Management System. These initiatives not only demonstrated my growing expertise in Java application development but also underscored my ability to creatively solve problems and implement robust software solutions.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Team Leader
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Mahindra & Mahindra Ltd, Chakan, Pune
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                February 2022 - July 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Managed paint shop operations and led a team of 60, focusing on system cleanliness and operational efficiency.
                Partnered with the Industrial Development team to enhance process efficiencies, reducing scrap and optimizing resource use.
                Enhanced team productivity through effective leadership, problem-solving, and data-driven decision-making.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Diploma Trainee Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Tata Motors Ltd, Pimpri-Chinchwad, Pune
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Dec 2020 - Dec 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Inspected engine components for spec compliance, utilizing technical drawings and durability tests.
                Analyzed precision instrument readings to uphold high accuracy standards.
                Honed skills in Quality Inspection, Precision Measurement, and Safety Compliance.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  R C Patel Institute of Technology, Shirpur
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2022 - Expected 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Currently in 3rd year, maintaining a commendable 7.88 CGPA up to the 5th semester, signifying my dedication to a robust academic foundation.
                Actively contributing as a core member of the Akatsuki Coding Club, where I play a vital role in competitive programming and collaborative projects, enriching my coding skills and teamwork abilities.
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Diploma, Electrical Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  R C Patel Polytechnic, Shirpur
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2018 - 2020
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Graduated with an impressive 90.61%, showcasing a strong grasp of Electrical Engineering fundamentals.
                Achieved 2nd rank in the 2nd year and 3rd rank in the 3rd year, demonstrating consistent academic excellence and a competitive edge among peers.
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  HSC
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Dr. P R Ghogare College, Shirpur
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  February 2017
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Scored 71.85%, demonstrating strong proficiency in science subjects and a commitment to academic excellence.
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  SSC
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                P B Mali Municipal High School, Shirpur
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  March 2015
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Achieved 80.20%, indicating a solid foundation in secondary education with a focus on comprehensive learning.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
