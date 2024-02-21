import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'left' }}>
            Hi, everyone, I'm Miroslav Pesic.
            <br />
            I am a Dynamic Full-Stack Developer skilled in MERN, Node.js, React, and Redux.
            <br />
            Proven expertise in optimizing performance, implementing security measures, and driving successful client collaborations.
            <br />
            <br />
            Proficient in responsive design and streamlined processes. 
            Adept at efficient code testing and DevOps practices. Strong problemsolving skills and effective communicator, committed to delivering high-quality,
            scalable solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
