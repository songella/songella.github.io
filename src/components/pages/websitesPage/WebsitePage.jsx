import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "../../icons/Icon";
import Button from "react-bootstrap/Button";

export default function WebsitePage({ scrollToSection }) {
    return (
        <Container>
            <Row>
                <p class=" text-md-start" style={{ fontSize: "4.4rem" }}>
                    Projects
                </p>
                <span
                    class="text-md-start"
                    style={{ fontSize: "1.4em", opacity: "50%" }}
                >
                    See a sample of my work
                </span>
                <span
                    class="text-md-start"
                    style={{ fontSize: "1.4em", opacity: "50%" }}
                >        </span>
            </Row>
            <Container
                style={{
                    height: "60vh",
                    padding: "5%",
                }}
            >
                <Row className="justify-content-md-center ">
                    <Col xs>
                        <Container>
                            <Row
                                className="justify-content-md-center"
                                style={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                    justifyContent: "center",
                                }}
                            >
                                Cardmates
                            </Row>
                            <Row
                                className="justify-content-md-center"
                                style={{ opacity: "75%" }}
                            >
                                Designed for students who struggle to balance their time between studying and socialization.

                            </Row>
                            <Row
                                className="justify-content-md-center pb-3"
                                style={{ opacity: "50%", justifyContent: "center" }}
                            >
                                Uses the MERN tech stack
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Button variant="outline-light">
                                        <a href={"https://github.com/songella/cardmates"}>
                                            Go to site
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-md-center">
                    <Col xs>
                        <Container>
                            <Row className="justify-content-md-center"></Row>
                            <Row className="justify-content-md-center"></Row>
                            <Row className="justify-content-md-center">
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row
                                className="justify-content-md-center"
                                style={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                    justifyContent: "center",
                                }}
                            >
                                S(t)imulation
                            </Row>
                            <Row
                                className="justify-content-md-center"
                                style={{ opacity: "75%" }}
                            >
                                Designed for idle usage and stimulation

                            </Row>
                            <Row
                                className="justify-content-md-center pb-3"
                                style={{ opacity: "50%", justifyContent: "center" }}
                            >
                                Uses HTML, CSS
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Button variant="outline-light">
                                        <a href={"https://main.dwf97j5haqpio.amplifyapp.com/"}>
                                            Go to site
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-md-center">
                    <Col xs>
                        <Container>
                            <Row
                                className="justify-content-md-center"
                                style={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                    justifyContent: "center",
                                }}
                            >
                                Arplans
                            </Row>
                            <Row
                                className="justify-content-md-center"
                                style={{ opacity: "75%" }}
                            >
                                Designed to connect vendors, venues, and planners for large scale events.
                            </Row>
                            <Row
                                className="justify-content-md-center pb-3"
                                style={{ opacity: "50%", justifyContent: "center" }}
                            >
                               Using Figma and Mongo
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Button variant="outline-light">
                                        <a href={"https://arplans.co"}>
                                            Go to site
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Row>
                <Icon
                    iconName="ChevronDown"
                    size={96}
                    className="down-arrow d-inline-block align-center d-none d-lg-block "
                    onClick={() => scrollToSection("contact")}
                />
            </Row>
        </Container>
    );
}