import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Icon } from "../../icons/Icon";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Blackstonelogo from "../../../assets/Blackstonelogo.png";
import BASTAlogo from "../../../assets/BASTAlogo.png";
import Bloomberglogo from "../../../assets/Bloomberglogo.png";
import Westxeastlogo from "../../../assets/westxeastlogo.png";
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
                        Launchpad Intern
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
                      Selected as part of a competitive internship program focused on career development and entrepreneurial mentorship 
                      within the fashion technology sector.
                    </p>
                    <p className="text-md-start">
                      Received in-depth mentorship from senior professionals across Operations, Analytics, and Product Development, 
                      developing cross-functional insights essential for scaling startups.
                    </p>
                    <p className="text-md-start">
                      Collaborated closely with the CEO and Founder of WEST X EAST to oversee web development and brand strategy, 
                      ensuring consistent growth and customer engagement across multiple channels.
                    </p>
                    <p className="text-md-start">
                      Led the redesign of digital storefronts and optimized backend systems, contributing to a 35% increase in quarterly sales.
                    </p>
                    <p className="text-md-start">
                      Conducted market research to identify new trends in fashion technology, informing business strategy and product decisions.
                    </p>
                    <p className="text-md-start">
                      Assisted in streamlining internal operations, from inventory management to order fulfillment, resulting in improved efficiency.
                    </p>
                    <p className="text-md-start">
                      This experience enhanced my leadership, strategic thinking, and technical skills, equipping me with hands-on knowledge 
                      to drive innovation in fast-paced environments.
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
                        href="https://www.bloomberg.com/company/stories/a-sum-greater-than-its-parts-bloomberg-and-bastas-groundbreaking-partnership/"
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
                      Selected as one of 35 students for Bloomberg's fall career development program in partnership with BASTA, 
                      focused on professional growth and leadership in the finance industry.
                    </p>
                    <p className="text-md-start">
                      Paired with the Head of Derivatives at Bloomberg for one-on-one mentorship, gaining hands-on insight 
                      into financial markets, trading strategies, and risk management.
                    </p>
                    <p className="text-md-start">
                      Participated in resume workshops, mock interviews, and professional development sessions, refining 
                      key career skills and enhancing job readiness.
                    </p>
                    <p className="text-md-start">
                      Developed a deeper understanding of the derivative markets and the role Bloomberg plays in global finance, 
                      while receiving actionable feedback on career strategies.
                    </p>
                    <p className="text-md-start">
                      Built strong connections with Bloomberg professionals and fellow mentees, fostering a network of 
                      like-minded individuals committed to career growth.
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
                        href="https://westxeast.com/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "2.4em",
                          }}
                        >
                          WEST X EAST
                        </span>
                      </a>
                      <Image
                        src={Westxeastlogo}
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
                        Product Management Intern
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
                    Coordinated with the CEO and Founder to manage product roadmaps, ensuring alignment between business objectives and product deliverables.
                  </p>
                  <p className="text-md-start">
                    Conducted UX evaluations using Figma and Shopify Liquid, redesigning the website’s product gallery and homepage for better user engagement.
                  </p>
                  <p className="text-md-start">
                    Managed the maintenance of eCommerce platforms including eBay, Depop, Etsy, and Pickle, directly contributing to a 35% increase in quarterly sales.
                  </p>
                  <p className="text-md-start">
                    Collaborated with the operations team to streamline backend processes, improving inventory tracking and order fulfillment efficiency.
                  </p>
                  <p className="text-md-start">
                    Analyzed customer behavior trends and identified opportunities to enhance product listings, contributing to growth across multiple platforms.
                  </p>
                  <p className="text-md-start">
                    Developed marketing strategies that optimized product visibility and engagement across social media platforms and online marketplaces.
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
                        href="https://www.projectbasta.com/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          class=" text-md-start "
                          style={{ fontSize: "2.4em" }}
                        >
                          BASTA
                        </span>
                      </a>
                      <Image
                        src={BASTAlogo}
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
                        Fellow
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
                        Selected to join BASTA, a program designed to empower first-generation college students 
                        and individuals from underrepresented communities with career development tools.
                      </p>
                      <p className="text-md-start">
                        Engaged in personalized career mentorship, working closely with industry professionals 
                        to identify key strengths, develop goals, and create actionable career plans.
                      </p>
                      <p className="text-md-start">
                        Received intensive guidance on job applications, interview preparation, and professional networking 
                        strategies to improve opportunities for placements with partner organizations.
                      </p>
                      <p className="text-md-start">
                        Participated in skill-building workshops focused on effective communication, leadership development, 
                        and adapting to dynamic work environments.
                      </p>
                      <p className="text-md-start">
                        Established valuable connections within a diverse cohort, creating a network of supportive peers 
                        and professionals across industries.
                      </p>
                      <p className="text-md-start">
                        The experience significantly enhanced career readiness, helping build confidence and providing 
                        a clear path toward achieving long-term professional goals.
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
                        href="https://www.sadienash.org/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "2.4em",
                          }}
                        >
                          Sadie Nash Leadership Project
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
                        Data Engineering Intern
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
                      Spearheaded a comprehensive database restructuring project for the Sadie Nash Leadership Project, 
                      a youth nonprofit focused on empowering young women and gender-expansive youth. 
                    </p>
                    <p className="text-md-start">
                      Utilized Excel, Python, and SQL to transfer decades of historical data into Salesforce, 
                      enhancing organizational efficiency and data accessibility. 
                    </p>
                    <p className="text-md-start">
                      Worked closely with cross-functional teams to identify key data points, ensuring smooth migration while minimizing data loss.
                    </p>
                    <p className="text-md-start">
                      Developed automated workflows within Salesforce to streamline data reporting and tracking, 
                      reducing manual effort by 34%.
                    </p>
                    <p className="text-md-start">
                      Trained staff members on best practices for using Salesforce, enabling them to efficiently manage donor and program data.
                    </p>
                    <p className="text-md-start">
                      This project laid the foundation for a more sustainable, data-driven approach to tracking the impact of Sadie Nash's programs.
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
