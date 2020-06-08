/*const zapier = require('zapier-platform-core')
const App = require('../index')
const appTester = zapier.createAppTester(App)
zapier.tools.env.inject();

describe('contact', ()=>{
    test('Update Data', async()=>{
        const bundle = {
            inputData: {
                id: 4596,
                name: "Abhi Shah",
                owner: 40,
            }
        };
        const result = await appTester(
            App.creates.contact.operation.perform,
            bundle
        );
        console.log(result)
        //expect(result.Data.name).toBe('bits')
    })
})*/