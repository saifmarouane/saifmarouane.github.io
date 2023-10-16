import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saif marouane </span>
            from <span className="purple"> Casablanca, morroco.</span>
            <br /> I am a final year student pursuing a degree in Artificial Intelligence and Computer Science Engineering. My academic journey has been focused on these disciplines, and I'm excited to apply 
            my knowledge and skills to practical applications in the field
            <br />
            
            <br />
            <br />
            some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Self-Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
