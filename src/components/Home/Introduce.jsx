import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { LinkInfos } from '../../infos/Links';

export default function Introduce() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              Welcome to <span className="purple"> My Site</span>
            </h1>
            <p className="home-about-body">
              ​Step into the world of innovative web development where I, a skilled JavaScript backend developer, turn
              complexities into elegant, efficient, and secure solutions.
              <br />
              <br />
              I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
              <br />
              <br />
              Your digital journey starts here, tailored to exceed expectations.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
                <li className="social-icons" key={`intro-social-icon-${idx}`}>
                  <a
                    className="icon-colour home-social-icons title-tooltip"
                    data-tooltip-content={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DarkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
