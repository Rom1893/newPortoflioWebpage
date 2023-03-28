import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  BsBootstrap
} from "react-icons/bs";
import {
  DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact
} from "react-icons/di";
import {
  SiNextdotjs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
