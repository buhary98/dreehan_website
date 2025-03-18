import React from "react";

import TeamImg1 from "../../assets/images/team_01.jpg";
import TeamImg2 from "../../assets/images/team_02.jpg";
import TeamImg3 from "../../assets/images/team_03.jpg";

import "./About.css";

const teamMembers = [
  {
    name: "William Smith",
    role: "Co-Founder",
    image: TeamImg1,
    description:
      "In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.",
  },
  {
    name: "Mary Houston",
    role: "Chief Marketing Officer",
    image: TeamImg2,
    description:
      "In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.",
  },
  {
    name: "Paul Walker",
    role: "Financial Analyst",
    image: TeamImg3,
    description:
      "In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Our Team <em>Members</em>
              </h2>
              <span>Suspendisse a ante in neque iaculis lacinia</span>
            </div>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="team-item">
                <img src={member.image} alt={member.name} />
                <div className="down-content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
