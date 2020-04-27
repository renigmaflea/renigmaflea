import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import SimpleSchema from 'simpl-schema';
import ReportItemButton from '../components/ReportItemButton';

const formSchema = new SimpleSchema({
  id: String,
});

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }

  /** On submit, insert the data. */
  submit(data) {
    this.setState({
      id: data,
    });
  }

  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h1" textAlign="center">Test Report an Item</Header>
            <Header as="h3" textAlign="center">Submit ID FIRST! Before reporting</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='id'/>
                <ErrorsField/>
              </Segment>
              <SubmitField/>
              { console.log(this.state.id.id) }
              <ReportItemButton itemID={this.state.id.id}/> {/* this is mighty stupid */}
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}
export default Test;
