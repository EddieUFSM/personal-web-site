/*eslint-disable*/
import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


const TechLogo = ({ src, alt, name }) => {
    const [showName, setShowName] = useState(false);
  
    return (
      <Col lg="2" xs="4">
        <div
          className="img-container"
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
        >
          <img
            alt={alt}
            className="img-fluid logos-tech-abilities"
            src={src}
          />
          {showName && <div className="tech-name">{name}</div>}
        </div>
      </Col>
    );
}
  

class TechAbilities extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Principal Technologies Abilities
                  </h4>
                  <Row className="justify-content-center">
                  <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://nestjs.com/img/logo-small.svg"
                        />
                    </div>
                    </Col>
                        <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://www.svgrepo.com/show/376337/node-js.svg"
                            />
                        </div>
                        </Col>
                        <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                            />
                        </div>
                        </Col>
                        <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                            />
                        </div>
                        </Col>
                        <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                            />
                        </div>
                        </Col>
                        <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                            />
                        </div>
                        </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default TechAbilities;
