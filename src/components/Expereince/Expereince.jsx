import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const companies = [
    {
      id: 1,
      name: "Microsoft",
      timeframe: "2023 - Present",
      description:
        "Ambassador at Microsoft, collaborating to share knowledge and insights.",
    },
    {
      id: 2,
      name: "Red Marker System",
      timeframe: "Jan 2023 - Dec 2023",
      description:
        "As a Software Operations Intern at RedMarker Systems, I played a crucial role in supporting the development and maintenance of the rOPT software. With a focus on batch processing, error detection, error correction, and image preparation for e-marking, I worked closely with the team to ensure the smooth and efficient operation of the software.",
    },
    {
      id: 3,
      name: "Bytewise",
      timeframe: "Mar 2022 - Dec 2022",
      description:
        "Worked as a MERN stack developer intern at Bytewise, a leading software development company. Implemented responsive designs and intuitive user interfaces to ensure a seamless user experience across different devices and platforms. Utilized modern development tools and frameworks like Git, npm, Webpack, and Redux to streamline the development process and improve code quality.",
    },

    {
      id: 4,
      name: "MLSA UET Lahore",
      timeframe: "Sep 2023 - Present",
      description:
        "Serving as a Technical Lead",
    },
    // Add more entries as needed
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (companyId) => {
    setSelectedCompany(companyId === selectedCompany ? null : companyId);
  };

  return (
    <div className="container2 ExperienceSection">
      <h1 className="contentHeading">
        <span>03. </span>Experience <span className="spanLine"></span>
      </h1>
      <div className="Experience">
        <div className="companyList">
          <h2>Companies</h2>
          <ul>
            {companies.map((company) => (
              <li
                key={company.id}
                className={company.id === selectedCompany ? "selected" : ""}
                onClick={() => handleCompanyClick(company.id)}
              >
                {company.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="companyDetails">
          <h2>Company Details</h2>
          {selectedCompany !== null ? (
            <div>
              <h3>{companies[selectedCompany - 1].name}</h3>
              <p>{companies[selectedCompany - 1].timeframe}</p>
              <p>{companies[selectedCompany - 1].description}</p>
            </div>
          ) : (
            <p>Select a company to view details.</p>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default Experience;
