import React from 'react';

export default function Pre(props) {
  return <div id={props.load ? 'preloader' : 'preloader-none'}></div>;
}
