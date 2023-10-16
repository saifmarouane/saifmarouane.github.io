import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJava, DiPython, DiNodejs, DiDatabase, DiGit, DiTrello,
  DiBootstrap,
  
  DiMysql,
  DiDocker,
  DiJira } from 'react-icons/di';
import { SiTensorflow, SiOpenai, SiPowerbi, SiTalend, SiMongodb, SiSpringboot } from 'react-icons/si';

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <DiJava />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiPython />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiTensorflow />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiOpenai />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiPowerbi />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiTalend />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiSpringboot />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiMongodb />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiGit />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiTrello />
</Col>


<Col xs={4} md={2} className="tech-icons">
  <DiBootstrap />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiMysql />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiDocker />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiJira />
</Col>
    </Row>
  );
}

export default Techstack;
