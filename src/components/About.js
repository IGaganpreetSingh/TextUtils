import React from 'react';

const About = (props) => {
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>About TextUtils</h1>
      <p>
        TextUtils is a simple yet powerful online text manipulation tool. It provides a convenient interface for performing various operations on text, making it easier for users to format and modify their textual content.
      </p>
      <p>
        With TextUtils, you can easily convert text to uppercase or lowercase, capitalize sentences, remove extra spaces, count characters, words, and lines, and much more. Whether you're a writer, programmer, or student, TextUtils can assist you in improving the quality and readability of your text.
      </p>
      <p>
        Our goal is to simplify the process of text manipulation and offer a user-friendly solution that saves time and effort. TextUtils is free to use and doesn't require any installation or downloads. Simply visit our website and start enhancing your text today!
      </p>
    </div>
    </>
  );
};

export default About;
