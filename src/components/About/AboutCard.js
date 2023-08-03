import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 blockquote-size">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is{" "}
            <span className="purple">Rodrigo Morán </span>. from{" "}
            <span className="purple"> Santiago de Chile.</span>
            <br />
            I'm a Full-Stack developer with a degree in Biochemistry and a
            passion for technology. With expertise in{" "}
            <b className="purple">
              {" "}
              HTML, CSS, JavaScript, Node, Express, MongoDB, React,{" "}
            </b>{" "}
            and more, I take pride in solving complex problems and thrive in
            collaborative environments.
            <br />
            <br />
            As a FullStack Developer, I aim to become a Tech Lead in the future,
            and I'm excited to tackle any challenges that come my way.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
