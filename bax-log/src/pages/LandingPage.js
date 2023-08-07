import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">WELCOME TO BAX-LOG</h1>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
