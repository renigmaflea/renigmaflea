import React from 'react';
import { Grid, Segment, Header, Feed, Icon, Visibility } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Messages } from '../../api/messages/Messages';
import AMessage from '../components/AMessage';


/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  message: String,
});

const backgroundStyle = {
  backgroundImage: `url(${'/images/pattern.jpg'})`,
  marginTop: '13px',
  backgroundSize: 'fit',
};

const MessageBoxStyle = {
  overflowY: 'scroll',
  height: '65vh',
  backgroundColor: 'white',
};

/** Renders the Page for adding a document. */
class PrivateMessage extends React.Component {

  /** On submit, insert the data. */
  submit(data, id, formRef) {
    const { message } = data;
    const sender = Meteor.user().username; { /* need to add item id */ }
    const receiver = id;
    const createdAt = new Date();
    Messages.insert({ sender, receiver, createdAt, message },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item reported successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    let fRef = null;
    return (
        <div style={backgroundStyle}>
          <Grid container centered>
            <Grid.Column>
              <Feed style={MessageBoxStyle}>
                <AMessage/>
                <AMessage/>
                <AMessage/>
                <AMessage/>
                <AMessage/>
                <AMessage/>
                <AMessage/>
              </Feed>

              <AutoForm ref={ref => { fRef = ref; }} schema={formSchema}
              onSubmit={data => this.submit(data, this.props.doc, fRef)} >
                <Grid container centered>
                  <Grid.Column width={9}>
                    <TextField name='message'/>
                    <ErrorsField/>
                  </Grid.Column>
                  {/*<Grid.Column>*/}
                  {/*  <SubmitField value='Report this Item'/>*/}
                  {/*</Grid.Column>*/}
                </Grid>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

PrivateMessage.propTypes = {
  doc: PropTypes.object,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  return {
    doc: documentId,
  };
})(PrivateMessage);
