/* globals describe it */
/*const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('contact', () => {
  test('search contact', async () => {
    const bundle = { };
    const results = await appTester(
      App.triggers.contact.operation.perform,
      bundle
    );
    console.log("result",results)
   /*expect(results.length).toBeGreaterThan(0);

    const firstContact = results[0];
    console.log("first",firstContact)
    expect(firstContact).toMatchObject({
      email: 'vivek@gmail.com',
    });
  });
});*/