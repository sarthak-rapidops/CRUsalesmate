const getFields = require('../getAllFields/getEditableFields')

const perform = async (z, bundle) => {
  const response = await z.request({
      method: 'POST',
      url: 'https://apis-dev.salesmate.io/v3/contacts/',
      body: bundle.inputData
  });
  return response.data;
};

const getAllFields = async (z, bundle)=>{
    const fields = await getFields(z, bundle);
    console.log(fields)
    return fields
}

module.exports = {
  key: 'contact',
  noun: 'Contact',
  display: {
      label: 'Create Contact',
      description: 'Create a Contact',
  },
  operation: {
      inputFields: [
          /*{key: 'firstName', required: true},
          {key: 'lastName', required: true},
          {key: 'email', required: true},
          {key: 'owner', required: true},
          {key: 'otherPhone', required: true},*/
          getAllFields
      ],
      perform,

      /*sample: {
          firstName: 'zapier',
          lastName: 'zapier',
          email: 'zapier@gmail.com',
          owner: 'Sarthak Shah',
          otherPhone: '9876543210'
      },*/
  },
};