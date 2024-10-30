import React, { useEffect } from "react";
import "../../style.css";

const Work = () => {
  const experiences = [
    { title: "Company A", role: "Software Developer", description: "TEXT MESSAGE" },
    { title: "Company B", role: "Frontend Engineer", description: "TEXT MESSAGE" },
    { title: "Company C", role: "Intern", description: "TEXT MESSAGE" },
    { title: "Company D", role: "UI/UX Designer", description: "TEXT MESSAGE" },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    const scrollHandler = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add("item--active");
        } else {
          item.classList.remove("item--active");
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="work-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="item" key={index}>
            <div className="content">
              <h3 className="content-title">{exp.title}</h3>
              <h4 className="content-subtitle">{exp.role}</h4>
              <p className="content-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
