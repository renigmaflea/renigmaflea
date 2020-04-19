import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Items } from '../../items/Items';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  address: String,
  description: String,
  category: {
    type: String,
    allowedValues: ['Moped', 'Mini Fridge', 'Fan', 'Macbook', 'Server'],
    defaultValue: 'Moped',
  },
});

/** Renders the Page for adding a document. */
class AddItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { firstName, lastName, address, description, category } = data;
    const owner = Meteor.user().username;
    Items.insert({ firstName, lastName, address, description, owner, category },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
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
            <Header as="h2" textAlign="center">Post an item to our page!</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='firstName'/>
                <TextField name='lastName'/>
                <TextField name='address'/>
                <LongTextField name='description'/>
                <SelectField name='category'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddItem;
