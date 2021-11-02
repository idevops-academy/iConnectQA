import { Selector } from 'testcafe';
const dataSet = require('./testdata.json');

fixture `Save multiple contacts`
    .page("http://ec2-13-232-95-65.ap-south-1.compute.amazonaws.com/")

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

