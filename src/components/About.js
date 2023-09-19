import React from 'react';
import logo from '../assets/demo.png'; // Import the logo image

function About(props) {
  const { imageSrc, aboutText } = props;

  return (
    <aside>
      <img src={imageSrc || logo} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;



