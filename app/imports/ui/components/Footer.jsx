import React from 'react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white' };
    const footerStyle = { paddingTop: '15px', marginTop: '15px', background: '#024731' };
    return (
          <footer style={footerStyle}>
            <div style={divStyle} className="ui center aligned container">
              <h4>RenigmaFlea LLC</h4>
                ICS 314 Final Project<br />
                Copyright 2027 <br />
            </div>
            <div style={divStyle} className="ui center aligned container">
              <br />
              Report an Item | Notify Admin | User policy
            </div>
          </footer>
    );
  }
}

export default Footer;
