import { Selector } from 'testcafe';
const dataSet = require('./testdata.json');

fixture `Save multiple contacts`
    .page(process.env.appurl)

dataSet.forEach(data => {
    test(`Enter '${data.name}'`, async t => {
        await t
            .typeText("#txtname",data.name)
            .typeText("#txtemail",data.email)
            .typeText("#txtphone",data.phone)
            .click("#btnsavecontact")
            .expect(Selector('#tblcontacts').innerText).contains(data.email)
    });
});

