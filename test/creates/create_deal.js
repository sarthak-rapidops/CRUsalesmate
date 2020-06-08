/* globals describe it */
const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
  it('should run creates.create_deal', async () => {
    const bundle = { inputData: {} };

    const results = await appTester(App.creates.create_deal.operation.perform, bundle);
    should.exist(results);
  });
});
