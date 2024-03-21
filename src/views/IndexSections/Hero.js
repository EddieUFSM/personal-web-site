/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Download } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-2 shape-custom"/>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <Typography variant="h4" color='#fff'><b>UONNI | Eduardo Rocha</b></Typography>
                    <p className="lead text-white">
                    <Typography variant="body1" color="#fff"><b>Hire Me As Employer</b> If you're looking for a skilled and experienced Tech Lead and Full Stack Developer for your project.</Typography>

                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="#"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <Download/>
                        </span>
                        <span className="btn-inner--text">Download CV</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/EddieUFSM"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-success mr-1">Follow me on</span>
                          on Github
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <path fill="#FFFFFF" d="M0 0 Q 1280 200 2560 0 L 2560 100 L 0 100 Z"/>

              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
