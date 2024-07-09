import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start p-5">
      <h1 className="flex font-title text-Brown text-4xl">Portfolio</h1>
      <div className="w-2/5 mt-5 border border-gray-300 p-2 bg-gray-50">
        <iframe
          className="w-full h-96"
          src="https://i512024.luna.fhict.nl/portfolio/Portfolio%20Abstract%20Versie%205.pdf"
        >
          This browser does not support PDFs. Please download the PDF to view
          it:
          <a
            href="https://i512024.luna.fhict.nl/portfolio/Portfolio%20Abstract%20Versie%205.pdf"
            download
          >
            Download PDF
          </a>
          .
        </iframe>
      </div>
      <a
        href="https://i512024.luna.fhict.nl/portfolio/Portfolio%20Abstract%20Versie%205.pdf"
        download="Portfolio_Abstract_Semester_3.pdf"
      >
        <button className="mt-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Download Portfolio Abstract Semester 3
        </button>
      </a>
    </div>
  );
};

export default About;
