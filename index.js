const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');


const ContactCreate = require('./creates/contact');
const ContactSearch = require('./searches/contact');

const createContactu = require("./creates/contactu");

const getContact = require("./triggers/contact");

const getContactu = require("./triggers/contactu");


const createCreateDeal = require("./creates/create_deal");


const getCreatedeal = require("./triggers/createdeal");


module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],
  
  searches: {
    [ContactSearch.key]: ContactSearch
  },

  creates: {
    [ContactCreate.key]: ContactCreate,
    [createContactu.key]: createContactu,
    [createCreateDeal.key]: createCreateDeal
  },

  searchOrCreates: {
    [ContactSearch.key]: {
      // The key must match the search
      key: ContactSearch.key, // same as above
      display: {
        // The label shows up when the search-or-create checkbox is checked.
        // See https://cdn.zappy.app/5fc31d104c6bd0050c44510557b3b98f.png
        label: 'Find or Create a Contact',
        description: 'x', // this is ignored
      },
      search: ContactSearch.key,
      create: ContactCreate.key,
    },
  },

  triggers: {
    [getContact.key]: getContact,
    [getContactu.key]: getContactu,
    [getCreatedeal.key]: getCreatedeal
  }
};
