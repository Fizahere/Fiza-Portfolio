import React from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";
import { ProjectContainer } from "./ProjectContainer";
import "./Projects.css";
import FitnessTracker from '../../assets/images/project1.png'
import PlantPalace from '../../assets/images/project2.png'
import HomeStyler from '../../assets/images/project3.png'
import Shop from '../../assets/images/project4.png'

export const Projects = () => {
  const projects = [
    {
      title: "Fitness Tracker - Mern",
      description:
        "A MERN stack fitness tracker with workout logging, goal setting, and responsive design with tailwind css.",
      imgUrl: FitnessTracker,
      link: "https://fitness-tracker-red-five.vercel.app",
    },
    {
      title: "Shop.CO",
      description:
        "A ReactJS e-commerce site with modern design, dynamic product management, and responsive layouts for seamless user experience.",
      imgUrl: Shop,
      link: "https://shop-co-red-two.vercel.app",
    },
    {
      title: "Home Styler",
      description:
        "A ReactJS interior design platform featuring curated styles, design inspiration, and product exploration.",
      imgUrl: HomeStyler,
      link: "https://home-styler.vercel.app",
    },
    {
      title: "Plant Palace -ReactJS",
      description:
        "A ReactJS plant nursery site offering diverse plants, care tips, and a user-friendly shopping experience.",
      imgUrl: PlantPalace,
      link: "https://plant-palace-hazel.vercel.app",
    },
    {
      title: "TVVerse - ReactJs",
      description:
        "TVVerse is a dynamic web application combining a user-friendly website and an intuitive dashboard. Built using Chakra UI for sleek frontend design, React Query for efficient data retrieval from the Episodate API, and Firebase for secure authentication, TVVerse offers users a seamless and safe platform to explore and engage with their favorite TV shows and episodes.",
      imgUrl: "./assets/images/tvverse.PNG",
      link: "https://chakra-ui-navy.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h4>Projects</h4>
            <p>Worked on Different Projects!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectContainer key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
