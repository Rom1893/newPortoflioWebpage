import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yahtzee from "../../Assets/Projects/yahtzee.png";
import lights from "../../Assets/Projects/lights.png";
import campsite from "../../Assets/Projects/campsite.png";
import color from "../../Assets/Projects/color.png";
import datas from "../../Assets/Projects/datas.png"; //<a href="https://www.freepik.com/free-vector/illustration-social-media-concept_2807761.htm#query=datascience&position=19&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              title="ColorPicker"
              description="Based on Flat UI colors and Material Ui colors, is a responsive easy to use color picker, for creating your own
              Palettes. It was made completely in React, using react-router, Material UI, and JSS styles."
              ghLink="https://github.com/Rom1893/PalettesProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campsite}
              title="Camping-site Website"
              description="Based on Yelp Website. It’s a website where you can, as a user, post a camping spot, describe it, upload
              images, and also review other camping spots. This application was made using HTML, CSS, Bootstrap and
              JavaScript (ejs). It has user authentication with credentials stored in MongoDB using ATLAS."
              ghLink="https://github.com/Rom1893/Campingsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lights}
              title="Lights-Out Game"
              description="The game consists of a 5 by 5 grid of lights. When the game starts, a random pattern of these lights is
              switched on. Pressing any of the lights will toggle it and the adjacent lights, the goal is to turn off all the lights.
              This game was made using React class-based components and CSS"
              ghLink="https://github.com/Rom1893/Lights-out"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yahtzee}
              title="Yahtzee!"
              description="The objective of the game is to score points by rolling five dice to make certain combinations. The dice can be
              rolled up to three times in a turn to try to make various scoring combinations. This game was made using React
              and CSS"
              ghLink="https://github.com/Rom1893/Yahtzee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datas}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
