import React from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";
import { ProjectContainer } from "./ProjectContainer";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "TVVerse - React Js",
      description:
        "TVVerse is a dynamic web application combining a user-friendly website and an intuitive dashboard. Built using Chakra UI for sleek frontend design, React Query for efficient data retrieval from the Episodate API, and Firebase for secure authentication, TVVerse offers users a seamless and safe platform to explore and engage with their favorite TV shows and episodes.",
      imgUrl: "./assets/images/tvverse.PNG",
      link: "https://chakra-ui-navy.vercel.app/",
    },
    {
      title: "Welcome to AuraVogue: Your Ultimate Aesthetic Heaven!",
      description:
        "AuraVogue is an ecommerce website built on PHP and Bootstrap. It uses MySQL as a database. It has all functionalities of online shopping and is really SEO friendly.",
      imgUrl: "./assets/images/aura.PNG",
      link: "https://auravogue.moreo.pk/website/",
    },
    {
      title: "Blog React Portal",
      description:
        "I spearheaded the development of a dynamic blog portal and website using React.js, React Query, and Ant Design.",
      imgUrl: "./assets/images/blog.PNG",
      link: "https://blog-portal-omega.vercel.app/",
    },
    {
      title: "React Chat App",
      description:
        "ChatApp is a responsive chatting web application with a focus on clean and modern UI design using React.js and Chakra UI. Implemented real-time messaging and authentication using firebase. The project showcases front-end development skills, UI/UX design, and the ability to create dynamic, user-friendly web applications.",
      imgUrl: "./assets/images/chatapp.jpeg",
      link: "https://chatting-app-pied.vercel.app/",
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
