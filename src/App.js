import React from 'react';

const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
  };

  const introStyle = {
    fontStyle: 'italic',
    fontSize: '1.2em',
    marginBottom: '30px',
  };

  const skillsStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyleMain = 
  {
    
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '1.7em',

  }

  const listItemStyle = {
    margin: '10px 0',
    fontSize: '1.1em',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>WebSwift Internship Assignment</h1>
      <p style={introStyle}>Hello, I am Ritesh Mishra.I am From Uttar Pradesh Lucknow.Currently I am Persuing B.Tech From Rajkiya Engineering Collage Bijnor in Infrmation Technology.I have knowledge about MERN Stack Technology and I have created many Projects. I am excited about the WebSwift internship opportunity!</p>

      <ul style={skillsStyle}>
      <li style={listItemStyleMain}>Skills</li>
        <li style={listItemStyle}>MERN Stack Technology</li>
        <li style={listItemStyle}>JavaScript</li>
        <li style={listItemStyle}>Data Structure and Algorithm</li>
        <li style={listItemStyle}>c++</li>
      </ul>
    </div>
  );
};

export default App;
