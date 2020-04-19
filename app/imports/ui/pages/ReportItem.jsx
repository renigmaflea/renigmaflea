import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Reports } from '../../api/report/Report';


/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  reason: {
    type: String,
    allowedValues: ['Inappropriate', 'Stolen', 'Spam', 'Seller disagreement'],
    defaultValue: 'Inappropriate',
  },
  comment: String,
});

/** Renders the Page for adding a document. */
class ReportItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, id, formRef) {
    const { reason, comment } = data;
    const reporter = Meteor.user().username; { /* need to add item id */ }
    const itemID = id;
    Reports.insert({ reason, comment, itemID, reporter },
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
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Report Item</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema}
                      onSubmit={data => this.submit(data, this.props.doc, fRef)} >
              <Segment>
                <SelectField name='reason'/>
                <LongTextField name='comment'/>
                <SubmitField value='Report this Item'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

ReportItem.propTypes = {
  doc: PropTypes.object,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  return {
    doc: documentId,
  };
})(ReportItem);
