const perform = async (z, bundle) => {
  const response = await z.request({
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'sessionToken': 'bbc9f361-9e78-11ea-8b98-3f60d8467ffd',
        'x-linkname': 'dev7.salesmate.io',
      },
      url: "https://apis-dev.salesmate.io/v3/contacts/search?rows=25&from=0&sortBy=&sortOrder=",
      body: {
          fields:[
            'firstName',
            'lastName',
            'email'
          ],
        "query": {
            "group":{
              "rules":[{
                    "condition": "EQUALS",
                    "moduleName":"Contact",
                    "field": {
                        "fieldName": bundle.inputData.fieldName
                    },
                    "data": bundle.inputData.value
              }]
            }
          }
        //email: bundle.inputData.email,
    },
  });
  console.log(response.data.Data.data)
  //console.log(response.ResponseError.content.Error.Name)
  return response.data.Data.data;
};
module.exports = {
  key: 'searchcontact',
  noun: 'Search Contact',
  display: {
      label: 'Find Contact',
      description: 'Find a Contact',
  },
  operation: {
      inputFields: [
          {
              key: 'fieldName',
              required: true,
              choices: {'name':'name', 'owner':'owner', 'email': 'email'},
              helpText: 'Find the Contact with this Field',
          },
          {
            key: 'value',
            required: true,
            helpText: "Find the Contact with this Field"
          }
      ],
      perform,
     /* sample: {
          email: 'test@gmail.com'
      },*/
  },
};