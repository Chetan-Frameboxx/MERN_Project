import React from "react";

const About = () => {
  return (
    <div id="about" className="container my-5 text-bg-dark p-5">
      <div className="card shadow p-4 text-bg-warning">
        <h2 className="text-center mb-4 text-dark">About FrameboxIT</h2>
        <p className="lead text-center text-dark">
          FrameboxIT is a leading tech academy dedicated to transforming
          aspiring students into job-ready professionals. We specialize in
          practical, industry-oriented training with a strong focus on
          real-world applications.
        </p>

        <div className="mt-4">
          <h4 className="mb-3 text-dark">Our Courses</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item list-group-item-warning">
              Full Stack Development
            </li>
            <li className="list-group-item list-group-item-warning">
              Data Analysis
            </li>
            <li className="list-group-item list-group-item-warning">
              Data Science
            </li>
            <li className="list-group-item list-group-item-warning">
              UI/UX Design
            </li>
            <li className="list-group-item list-group-item-warning">
              MERN Stack
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h4 className="mb-3 text-success">
            Scholarship Program for Internship Students
          </h4>
          <p className="fw-bold text-dark">
            We are offering a{" "}
            <span className="text-danger">
              limited-seats scholarship program
            </span>{" "}
            exclusively for our internship students! Gain access to full-time
            courses at discounted or zero fees. Hurry, seats are limited!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;