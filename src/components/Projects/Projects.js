import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cartoon from "../../Assets/Projects/cartoon.png";
import Hotel from "../../Assets/Projects/Hotel.png";
import car from "../../Assets/Projects/car.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Rental System"
              description="The Car Rental System is a Java project that allows users to rent cars, view availability, and manage bookings. Admins can add or remove cars, track rentals, and manage payments. Built with core Java and OOP, it simulates a basic real-world car rental platform with login and history features."
              ghLink="https://github.com/vikash0706/Car_Rental_System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Reservation System"
              description="The Hotel Reservation System is a Java-based desktop app that manages room bookings, guest info, and payments. It includes room management, reservation handling, login system, booking history, and payment processing using file handling or MySQL. Built with Core Java and OOP."
              ghLink="https://github.com/vikash0706/Hotel-Reservation-System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartoon}
              isBlog={false}
              title="Cartoonize"
              description="This project converts regular images into cartoon-style images using Python and OpenCV. It applies edge detection, bilateral filtering, and contour smoothing to give a cartoon-like effect. Ideal for fun image transformations, face filters, and basic computer vision learning."
              ghLink="https://github.com/vikash0706/Cartoonize.git"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
