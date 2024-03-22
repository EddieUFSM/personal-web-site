import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">About Me</h2>
                <p className="lead">
                    With over 13 years of Node.js development experience, I lead a talented team in Brazil. Specializing in NestJS, TypeScript, and ExpressJS, I craft robust, scalable applications with a focus on best practices and efficiency. Delivering high-quality solutions aligned with market demands. Whether you need assistance with architecture design, development, or project management, I'm here to help!
                </p>
              </Col>
            </Row>
           
          </Container>
        </section>
      </>
    );
  }
}

export default About;
