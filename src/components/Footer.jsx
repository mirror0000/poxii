import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkInfos } from '../infos/Links';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Copyright &copy; {year} Miroslav Pesic</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            {LinkInfos.map(({ href, icon: { light: LightIcon }, label }, idx) => (
              <li className="social-icons" key={`foot-social-icon-${idx}`}>
                <a
                  className="title-tooltip"
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LightIcon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
