const getFields = require('../getAllFields/getEditableFields')
const perform = async (z, bundle) => {
  const response = await z.request({
      method: 'PUT',
      url: `https://apis-dev.salesmate.io/v3/contacts/${bundle.inputData.id}`,
      body: bundle.inputData
  });
  return response;
};

const getAllFields = async (z, bundle)=>{
    const fields = await getFields(z, bundle);
    console.log(fields)
    return fields
}

module.exports = {
  key: 'updatecontact',
  noun: 'Update Contact',
  display: {
      label: 'update Contact',
      description: 'Update a Contact',
  },
  operation: {
      inputFields: [
          getAllFields
      ],
      perform,
      /*sample: {
          id:1,
          name: 'test',
          owner: 1
      },*/
  },
}
/* {
              key: 'id',
              label: "Contact Id",
              required: true
          },
          {
              key: 'name',
              label: "Name",
              required: true,
          },
          {
              key: 'owner',
              label: "Owner",
              required: true,
          }*/