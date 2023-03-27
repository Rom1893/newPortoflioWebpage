import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png"; //Image by <a href="https://www.freepik.com/free-vector/hand-drawn-profile-icon_18300334.htm#&position=6&from_view=collections">Freepik</a>
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            My passion for programming was ignited when I began exploring data  science as a way to apply my degree in Biochemistry to solve complex problems using languages like <b className="purple"> Python and Matlab </b>. Through this journey, I discovered my love for programming and how it can be used to create innovative solutions.
              <br />
              <br />Being fluent in both
                <b className="purple"> Spanish and English </b> my interests lie in in the fields of  <b className="purple"> web technologies, products, and deep learning</b>
              <br />
              <br />
              During my free time, I continue to explore new technologies and tools, applying my passion for developing products with <b className="purple"> Node.Js </b> and modern JavaScript libraries and frameworks like <b className="purple"> React.js and Next.js </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myAvatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rom1893"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rodrigomoranf/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>

  );
}
export default Home2;
