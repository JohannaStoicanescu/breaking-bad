import React from "react";
import logoLink from "../img/linkedin.png";
import logoGithub from "../img/github.png";

const losted = [
  {
    name: "Elias Soufi",
    linkedin: "https://www.linkedin.com/in/elias-soufi-289b98151/",
  },
  {
    name: "Johanna Stoicanescu",
    linkedin: "https://www.linkedin.com/in/johanna-stoicanescu-752801252/",
    github: "https://github.com/JohannaStoicanescu",
  },
  {
    name: "Eric Madou",
    linkedin: "https://www.linkedin.com/in/eric-madou/",
  },
];

export default function About() {
  return (
    <div className="footer">
      {losted.map((el) => {
        return (
          <section>
            <div>
              <a href={el.linkedin} target="_blank" rel="noreferrer">
                <img src={logoLink} alt="" />
              </a>
              <a href={el.github} target="_blank" rel="noreferrer">
                <img style={{ borderRadius: "25px" }} src={logoGithub} alt="" />
              </a>
            </div>
            <p>{el.name}</p>
          </section>
        );
      })}
    </div>
  );
}
