const getFields = require('../getAllFields/deal')

// create a particular createdeal by name
const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://apis-dev.salesmate.io/v3/deals',
    // if `body` is an object, it'll automatically get run through JSON.stringify
    // if you don't want to send JSON, pass a string in your chosen format here instead
    body: bundle.inputData
  });
  // this should return a single object
  return response.data;
};

const getAllFields = async (z, bundle)=>{
  const fields = await getFields(z, bundle);
  console.log(fields)
  return fields
}

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#createschema
  key: 'create_deal',
  noun: 'Createdeal',

  display: {
    label: 'Create Deal',
    description: 'Creates a new createdeal, probably with input from previous steps.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    // End-users will map data into these fields. In general, they should have any fields that the API can accept. Be sure to accurately mark which fields are required!
    inputFields: [
      getAllFields
    ],

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
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ]
  }
};
