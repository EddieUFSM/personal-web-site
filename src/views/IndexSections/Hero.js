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
                  <Col className="text-center" lg="12">
                    <Typography variant="h4" color='#fff'><b>UONNI | Eduardo Rocha</b></Typography>
                  </Col>
                  <Col className="text-center" lg="12">
                    <Typography variant="body1" className="lead text-white" color="#fff"><b>Hire Me As Employer</b> If you're looking for a skilled and experienced Tech Lead and Full Stack Developer for your project.</Typography>
                  </Col>
                  <Col className="text-center" lg="12">
                    <Typography className="lead text-white"><b>Hire Me as Freelancer</b> I offer my services as a Tech Lead and Full Stack Developer to help you bring your projects to life.</Typography> 
                  </Col>
                  <Col className="text-center" lg="6">  
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://drive.google.com/file/d/1XYZURMS0f2jgHAMvgZnzOgqXAmlZPNgd/view?usp=sharing"
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
                          <span className="text-success mr-1">Follow me</span>
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
