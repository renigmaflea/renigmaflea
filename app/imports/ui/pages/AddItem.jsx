import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField, SelectField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Items } from '../../api/item/Items';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  itemName: String,
  price: String,
  address: String,
  description: String,
  category: {
    type: String,
    allowedValues: ['Transportation', 'Household Appliances', 'Technology', 'Miscellaneous'],
    defaultValue: 'Transportation',
  },
  image: String,
});

/** Renders the Page for adding a document. */
class AddItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { firstName, lastName, itemName, price, address, description, category, image } = data;
    const owner = Meteor.user().username;
    Items.insert({ firstName, lastName, itemName, price, address, description, category, image, owner },
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
    const titleStyle = {
      color: '#0e9e71',
      padding: '10px',
      margin: '10px',
      textDecoration: 'underline',
      fontWeight: 'bold',
    };

    const backgroundStyle = {
      backgroundImage: `url(${'/images/pattern.jpg'})`,
      backgroundSize: 'fit',
      padding: '10px',
    };
    let fRef = null;
    return (
        <div style={backgroundStyle}>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center inverted" style={titleStyle}>Add Item</Header>
              <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
                <Segment>
                  <TextField name='firstName'/>
                  <TextField name='lastName'/>
                  <TextField name='itemName'/>
                  <TextField name='price'/>
                  <TextField name='address'/>
                  <LongTextField name='description'/>
                  <SelectField name='category'/>
                  <TextField name='image'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default AddItem;