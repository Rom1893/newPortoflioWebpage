import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import campsite from "../../Assets/Projects/campsite.png";
import color from "../../Assets/Projects/color.png";
import datas from "../../Assets/Projects/datas.png"; //<a href="https://www.freepik.com/free-vector/illustration-social-media-concept_2807761.htm#query=datascience&position=19&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
import lights from "../../Assets/Projects/lights.png";
import yahtzee from "../../Assets/Projects/yahtzee.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              title="Smoltification Transcriptome Analysis"
              description="This data science project aims to understand the Smoltification process of Atlantic salmon through transcriptomic sequencing and bioinformatics analysis. The study identifies changes in transcript expression between Parr and Smolt stages, with a focus on the anterior kidney tissue. The results provide insight into the physiological changes that occur during Smoltification, and the potential impact on salmon survival in aquaculture."
              ghLink="https://github.com/Rom1893/newPortoflioWebpage/blob/main/src/Assets/Projects/congress.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
