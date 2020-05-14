import React from 'react';
import { Link } from 'react-router-dom';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white', fontSize: '20px', fontFamily: 'Montserrat' };
    const divStyle2 = { color: 'red', fontSize: '20px', fontFamily: 'Montserrat' };
    const divStyle3 = { color: 'white', fontSize: '20px', fontFamily: 'Montserrat' };
    const divStyle4 = { color: 'orange', fontSize: '20px', fontFamily: 'Montserrat' };
    const footerStyle = { paddingTop: '15px', marginTop: '15px', paddingBottom: '15px', background: '#024731' };
    return (
          <footer style={footerStyle}>
            <div style={divStyle} className="ui center aligned container">
              <h2>Rainbow Retailers</h2>
                ICS 314 Final Project<br />

                The best place on the Internet <br />
            </div>
            <div style={divStyle} className="ui center aligned container">
              <br />
              <Link style={divStyle2} to={ '/reportguide' } > Report an Item </Link> |
              <Link style={divStyle3} to={ '/' }> Home Page </Link> |
              <Link style={divStyle4} to={ '/about' }> User Policy </Link>
            </div>
          </footer>
    );
  }
}

export default Footer;
