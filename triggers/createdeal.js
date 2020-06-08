// triggers on a new createdeal with a certain tag
const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://apis-dev.salesmate.io/v3/deals/search?rows=25&pageNo=1&sortBy=&sortOrder=&pipeline=Sales&selectedCustomViewId=14',
    body:{
      "fields": [
        "title",
        "PrimaryContact.name",
        "PrimaryCompany.name",
        "dealValue",
        "stage",
        "status",
        "owner",
        "lastActivityAt",
        "tags"
      ],
      "query": {
        "group": {
        }
     }
    }
  });
  // this should return an array of objects
  return response.data.Data.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: 'createdeal',
  noun: 'Createdeal',

  display: {
    label: 'New deal',
    description: 'Triggers when a new createdeal is created.'
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
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ]
  }
};
