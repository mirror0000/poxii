import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [ 'Senior Frontend Developer', 'Full-Stack Developer', 'Creative Thinking', 'HIgh attention to detail'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
