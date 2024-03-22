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
  

class ArchAbilities extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Principal Infrastructure Technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                            alt="..."
                            className="img-fluid logos-tech-abilities"
                            src="https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg"
                            title="Lamda"
                            />
                        </div>
                    </Col>
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                                alt="..."
                                className="img-fluid logos-tech-abilities"
                                src="https://icon.icepanel.io/AWS/svg/Compute/EC2.svg"
                                title="EC2"
                            />
                        </div>
                    </Col>
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                                alt="..."
                                className="img-fluid logos-tech-abilities"
                                src="https://icon.icepanel.io/AWS/svg/Containers/Elastic-Kubernetes-Service.svg"
                                title="EKS"
                            />
                        </div>
                    </Col>
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                                alt="..."
                                className="img-fluid logos-tech-abilities"
                                src="https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Service.svg"
                                title="ECS"
                            />
                        </div>
                    </Col>
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                                alt="..."
                                className="img-fluid logos-tech-abilities"
                                src="https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg"
                                title="Amplify"
                            />
                        </div>
                    </Col>
                    <Col lg="2" xs="4">
                        <div className="img-container">
                            <img
                                alt="..."
                                className="img-fluid logos-tech-abilities"
                                src="https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg"
                                title="Route-53"
                            />
                        </div>
                    </Col>

                    <Col lg="2" xs="4">

                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Site-to-Site-VPN.svg"
                        title="Site-to-Site VPN"
                        />
                    </div>
                    </Col>
                    <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg"
                        title="Simple Storage Service"
                        />
                    </div>
                    </Col>
                    <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg"
                        title="DynamoDB"
                        />
                    </div>
                    </Col>
                    <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/Management-Governance/CloudFormation.svg"
                        title="CloudFormation"
                        />
                    </div>
                    </Col>
                    <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg"
                        title="API Gateway"
                        />
                    </div>
                    </Col>
                    <Col lg="2" xs="4">
                    <div className="img-container">
                        <img
                        alt="..."
                        className="img-fluid logos-tech-abilities"
                        src="https://icon.icepanel.io/AWS/svg/Management-Governance/Auto-Scaling.svg"
                        title="Auto Scaling"
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

export default ArchAbilities;
