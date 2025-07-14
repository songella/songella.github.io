import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import EllaPhoto from "../../../assets/EllaPhoto.JPG";
import { Icon } from "../../icons/Icon";

export default function IntroPage({ scrollToSection }) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} class="text-md-start" fluid>
          <Row>
            <p class=" text-md-start" style={{ fontSize: "4rem" }}>
              Hi
            </p>
          </Row>
          <Row>
            <p class="text-md-start" style={{ fontSize: "4em" }}>
              I'm <strong style={{ color: "plum" }}>Ella</strong>
            </p>
          </Row>
          <Row>
            <p class="text-md-start" style={{ fontSize: "4em" }}>
              Technologist, Researcher, Designer
            </p>
            <span
              class="text-md-start"
              style={{ fontSize: "1.4em", opacity: "50%" }}
            >
              Computer Science and Psychology B.A Hunter '24
            </span>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Image
            src={EllaPhoto}
            fluid
            roundedCircle
            className="d-none d-lg-block "
          />
        </Col>
      </Row>
      <Row>
        <Icon
          iconName="ChevronDown"
          size={96}
          className="down-arrow mt-4 d-inline-block align-center d-none d-lg-block "
          onClick={() => scrollToSection("experience")}
        />
      </Row>
    </Container>
  );
}
