import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

class ReportGuide extends React.Component {
  /** Render the page once subscriptions have been received. */
  render() {
    const titleStyle = {
      color: '#0e9e71',
      textDecoration: 'underline',
      fontWeight: 'bold',
      marginTop: '20px',
    };

    const textStyle = {
      fontSize: '22px',
    };

    const backgroundStyle = {
      backgroundImage: `url(${'/images/pattern.jpg'})`,
      backgroundSize: 'fit',
    };
    return (
        <div style={backgroundStyle}>
          <Container>
            <Header as="h1" textAlign="center" style={titleStyle}>Reporting an Item</Header>

            <Header as="h2" textAlign="center" style={titleStyle}>Posting</Header>
            <p style={textStyle}>To report an item, you can click the "Report this item" button on an item's page.
              You would be redirected to the reporting page for that item, where you can fill a reporting form.
              <Image src="/images/ReportPage.png" centered/>
            </p>
          </Container>
        </div>
    );
  }
}

export default ReportGuide;