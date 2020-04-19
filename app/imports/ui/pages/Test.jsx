import React from 'react';
import { Button } from 'semantic-ui-react';
import ReportItemButton from '../components/ReportItemButton';

class Test extends React.Component {
  insert() {

  }

  render() {
    return (
        <div>
          <ReportItemButton itemID='test1'/>
          <Button onClick={}>Insert item</Button>
        </div>
    );
  }
}
export default Test;
