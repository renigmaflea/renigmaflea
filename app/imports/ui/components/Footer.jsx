import React from 'react';
import { Link } from 'react-router-dom';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white' };
    const footerStyle = { paddingTop: '15px', marginTop: '15px', background: '#024731' };
    return (
          <footer style={footerStyle}>
            <div style={divStyle} className="ui center aligned container">
              <h4>Rainbow Retailers</h4>
                ICS 314 Final Project<br />
                The best place on the Internet <br />
            </div>
            <div style={divStyle} className="ui center aligned container">
              <br />
              <Link to={ '/report' } > Report an Item </Link> |
              <Link to={ '/' }> Home Page </Link> |
              <Link to={ '/about' }> User Policy </Link>
            </div>
          </footer>
    );
  }
}

export default Footer;
