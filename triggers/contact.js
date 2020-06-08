// triggers on a new create with a certain tag
const getFields = require('../getAllFields/getEditableFields')

const getAllFields = async (z, bundle)=>{
  const fields = await getFields(z, bundle);
  console.log(fields)
  return fields
}

const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://apis-dev.salesmate.io/v3/contacts/search?rows=25&from=0&sortBy=&sortOrder=',
    body:{
      "fields": [
        "name",
        "owner",
        "mobile",
        "email"
      //getAllFields
      ],
      "query": {
        "group": {
        }
      }
    }
  });
  // this should return an array of objects
  //console.log(response.json.Data.data)
  return response.data.Data.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: 'contact',
  noun: 'Contact',

  display: {
    label: 'New Contact',
    description: 'Triggers when a new contact is created.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    /*sample: {
      id: 1,
      name: 'Test'
    },*/

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      /*{key: 'name', label: 'Name'},
      {key: 'email', label: 'Email'},
      {key: 'mobile', label: 'Mobile'},
      {key: 'owner', label: 'Owner'},*/
    ]
  }
};
