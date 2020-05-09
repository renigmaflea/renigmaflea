import React from 'react';
import { Grid, Segment, Header, Feed, Icon, Visibility, Button, Image } from 'semantic-ui-react';
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
  marginTop: '10px',
  height: '65vh',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column-reverse',
};

const imageStyle = {
  objectFit: 'cover',
  width: '50px',
  height: '50px',
};

/** Renders the Page for adding a document. */
class PrivateMessage extends React.Component {

  /** On submit, insert the data. */
  submit(data, id, formRef) {
    const { message } = data;
    const sender = Meteor.user().username; { /* need to add item id */ }
    const receiver = id;
    const createdAt = Date.now();
    Messages.insert({ sender, receiver, createdAt, message },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            // swal('Success', 'Item reported successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    console.log();
    let fRef = null;
    const SndPartyUsername = this.props.doc;
    const SndPartyImage = 'images/users/user3.jpg';
    const userImage = 'images/users/defaultUser.png';
    return (
        <div style={backgroundStyle}>
          <Grid container centered>
            <Grid.Column>
              <Segment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Image src={SndPartyImage} style={imageStyle} size='large'/>
                    </Grid.Column>
                      <Grid.Column width={10}>
                        <Header>Chatting with {SndPartyUsername}</Header>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

              <Segment style={MessageBoxStyle}>
                <Grid>
                  {this.props.messages.map(
                      function (message) {
                        let leftSide = false;
                        let image = userImage;
                        if (SndPartyUsername === message.sender) {
                          leftSide = true;
                          image = SndPartyImage;
                        }

                        return (
                            <AMessage key={message._id} buyerSide={leftSide} message={message} image={image}/>
                        );
                      }
                  )}
                </Grid>
              </Segment>

              <Segment>
                <AutoForm autoComplete='off' autoFocus='on' ref={ref => {
                  fRef = ref;
                }} schema={formSchema}
                             onSubmit={data => this.submit(data, this.props.doc, fRef)}>
                  <Grid container centered>
                    <Grid.Column width={16}>
                      <TextField name='message'/>
                      <ErrorsField/>
                    </Grid.Column>
                  </Grid>
                </AutoForm>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

PrivateMessage.propTypes = {
  doc: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('ThemMessages', documentId);
  return {
    doc: documentId,
    messages: Messages.find().fetch(),
    ready: subscription.ready(),
  };
})(PrivateMessage);
