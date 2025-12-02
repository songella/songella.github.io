import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Icon } from "../../icons/Icon";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BNYlogo from "../../../assets/BNYlogo.png";
import Blackstonelogo from "../../../assets/Blackstonelogo.png";
import BASTAlogo from "../../../assets/BASTAlogo.png";
import Bloomberglogo from "../../../assets/Bloomberglogo.png";
import SNLPlogo from "../../../assets/snlplogo.png";
import EllaPDF from "../../../assets/Ella_resume.pdf";


export default function ExperiencePage({ scrollToSection }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Row>
                <p class=" text-md-start" style={{ fontSize: "4.4rem", margin: 0 }}>
                    Experience
                </p>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={null}
                    indicators={false}
                    touch={true}
                    style={{ height: "70vh" }}
                >
                    <Carousel.Item>
                        <Container className=" justify-content-center align-items-center">
                            <Row className="justify-content-center align-items-center">
                                <Col xs={12} md={8} class="text-md-start" fluid>
                                    <Row class="text-md-start">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <a
                                                href="https://www.bny.com/"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "2.4em",
                                                    }}
                                                >
                                                    BNY
                                                </span>
                                            </a>
                                            <Image
                                                src={BNYlogo}
                                                fluid
                                                className="d-none d-lg-block "
                                                style={{ maxWidth: "20%", height: "auto" }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p
                                                class=" text-md-start"
                                                style={{ fontSize: "1.4em", opacity: "50%" }}
                                            >
                                                Operations Analyst
                                            </p>
                                        </div>
                                    </Row>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "56vh",
                                        }}
                                    >
                                        <p className="text-md-start">
                                            Currently working in a analyst program supporting Corporate Action Operations on the Global Custody Platform.
                                        </p>
                                        <p className="text-md-start">
                                            Process corporate actions including mergers, acquisitions, stock splits, and change events across North and South American markets using Excel and legacy custody systems, averaging $50MM asset value weekly.
                                        </p>
                                        <p className="text-md-start">
                                            Develop standard operating procedures for processes across depositories and markets, collaborating with CDS and DTCC.
                                        </p>
                                        <p className="text-md-start">
                                            Built Custody Compass, an AI agent that helps new hires navigate using SOPs and training materials. Placed third in firm-wide AI Promptathon.
                                        </p>
                                        <p className="text-md-start">
                                            Design automated dashboards and workflows using Power BI, SQL, Tableau, and Alteryx to improve reporting efficiency.
                                        </p>
                                        <p className="text-md-start">
                                            Earned certifications in Power BI, Alteryx, and Securities Industry (SIE) through internal training programs.
                                        </p>
                                        <p className="text-md-start">
                                            Organized volunteer events and lead End of Year celebrations as a member of the Employee Engagement Committee.
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Container className=" justify-content-center align-items-center">
                            <Row className="justify-content-center align-items-center">
                                <Col xs={12} md={8} class="text-md-start" fluid>
                                    <Row class="text-md-start">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <a
                                                href="https://www.blackstone.com/our-impact/blackstone-launchpad/"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "2.4em",
                                                    }}
                                                >
                                                    Blackstone
                                                </span>
                                            </a>
                                            <Image
                                                src={Blackstonelogo}
                                                fluid
                                                className="d-none d-lg-block "
                                                style={{ maxWidth: "20%", height: "auto" }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p
                                                class=" text-md-start"
                                                style={{ fontSize: "1.4em", opacity: "50%" }}
                                            >
                                                CUNY Launchpad Project Manager
                                            </p>
                                        </div>
                                    </Row>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "56vh",
                                        }}
                                    >
                                        <p className="text-md-start">
                                            Selected for dual internship placement through Blackstone's CUNY Launchpad program.
                                        </p>
                                        <p className="text-md-start">
                                            Received mentorship from C-Suite, Operations, and Analytics leaders.
                                        </p>
                                        <p className="text-md-start">
                                            Matched with WEST X EAST, a fashion technology company using 3D modeling and AI to customize garments and curb overproduction.
                                        </p>
                                        <p className="text-md-start">
                                            Led web redesign using Shopify CSS and Three.js to build a 3D garment shopping experience, working with a team of 4 across technical and operations departments.
                                        </p>
                                        <p className="text-md-start">
                                            Generated automated reporting using Google and Meta Ad analytics to generate four quarters of systematic reporting. 
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Container className="justify-content-center align-items-center">
                            <Row className="justify-content-center align-items-center">
                                <Col xs={12} md={8} class="text-md-start" fluid>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "55vh",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <a
                                                href="https://www.bloomberg.com/"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    class=" text-md-start "
                                                    style={{ fontSize: "2.4em" }}
                                                >
                                                    Bloomberg
                                                </span>
                                            </a>
                                            <Image
                                                src={Bloomberglogo}
                                                fluid
                                                className="d-none d-lg-block "
                                                style={{ maxWidth: "20%", height: "auto" }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p
                                                class=" text-md-start"
                                                style={{ fontSize: "1.4em", opacity: "50%" }}
                                            >
                                                BASTA Mentee
                                            </p>
                                        </div>
                                    </Row>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "55vh",
                                        }}
                                    >
                                        <p className="text-md-start">
                                            Selected as one of 50 students for Bloomberg's fintech mentorship program in partnership with BASTA.
                                        </p>
                                        <p className="text-md-start">
                                            Shadowed the Head of Derivatives, learning about trading strategies and operations in global financial markets.
                                        </p>
                                        <p className="text-md-start">
                                            Participated in resume workshops and mock interviews to refine professional skills and job readiness.
                                        </p>
                                        <p className="text-md-start">
                                            Built a network with Bloomberg engineers and other mentees in fintech and finance.
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Container className="justify-content-center align-items-center">
                            <Row className="justify-content-center align-items-center">
                                <Col xs={12} md={8} class="text-md-start" fluid>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "55vh",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <a
                                                href="https://www.sadienash.org/"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    class=" text-md-start "
                                                    style={{ fontSize: "2.4em" }}
                                                >
                                                    CUNY Research Foundation
                                                </span>
                                            </a>
                                            <Image
                                                src={SNLPlogo}
                                                fluid
                                                className="d-none d-lg-block "
                                                style={{ maxWidth: "20%", height: "auto" }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p
                                                class=" text-md-start"
                                                style={{ fontSize: "1.4em", opacity: "50%" }}
                                            >
                                                Design and Data Intern
                                            </p>
                                        </div>
                                    </Row>
                                    <Row
                                        style={{
                                            overflow: "auto",
                                            maxHeight: "55vh",
                                        }}
                                    >
                                        <p className="text-md-start">
                                            Worked on an educational technology program aimed at streamlining curriculum and data management systems.
                                        </p>
                                        <p className="text-md-start">
                                            Created STEM content for K-5 students using Makecode Arcade, Canva, and Microsoft Suite. Taught mechanical engineering to classes of 30 second graders.
                                        </p>
                                        <p className="text-md-start">
                                            Managed a database restructuring project for Sadie Nash Leadership Project, processing 30 years of data using Salesforce, Python, and Excel.
                                        </p>
                                        <p className="text-md-start">
                                            Migrated data to Salesforce, improving operational efficiency by 34% and enabling better tracking of youth program impact.
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                </Carousel>
            </Row>
            <Row>
                <Row className="mt-3">
                    <Col>
                        <a href="https://www.linkedin.com/in/ella-song/">
                            <Icon
                                iconName="Linkedin"
                                size={40}
                                className=" align-center icon"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://github.com/songella">
                            <Icon
                                iconName="Github"
                                size={40}
                                className=" align-center icon"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href={EllaPDF} download="Ella_resume">
                            <Icon
                                iconName="Download"
                                size={40}
                                className=" align-center icon"
                            />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Icon
                        iconName="ChevronDown"
                        size={96}
                        className="down-arrow mt-4 d-inline-block align-center d-none d-lg-block "
                        onClick={() => scrollToSection("websites")}
                    />
                </Row>
            </Row>
        </Container>
    );
}
