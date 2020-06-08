/* globals describe, it, expect */

const zapier = require('zapier-platform-core');
const should = require('should')
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('custom auth', () => {
  it('passes authentication and returns json', async () => {
    const bundle = {
      authData: {
        'api_key': 'bbc9f361-9e78-11ea-8b98-3f60d8467ffd',
        'subdomain': 'dev7.salesmate.io'
      },
    };

    const response = await appTester(App.authentication.test, bundle);
    // expect(response.data).toHaveProperty('username');
    console.log(response);
    should.exists(response.content)
  });

  it('fails on bad auth', async () => {
    const bundle = {
      authData: {
        'api_key': 'Bbc9f361-9e78-11ea-8b98-3f60d8467ffd',
        'subdomain': 'dev7.salesmate.io'
      },
    };

    try {
      await appTester(App.authentication.test, bundle);
    } catch (error) {
      // console.log(bundle)
      // expect(error.message).toContain('The API Key you supplied is incorrect');
      console.log(error)
      should.exists(error)
      return;
    }
    throw new Error('appTester should have thrown');
  });
});