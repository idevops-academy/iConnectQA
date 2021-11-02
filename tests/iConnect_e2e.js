import { Selector } from 'testcafe';


fixture `Test iConnect application`
    .page(process.env.appurl)

test('Test Contact Saving', async t => {
    await t
        .typeText("#txtname","Shaik")
        .typeText("#txtemail","shaik@gmail.com")
        .typeText("#txtphone","06547803")
        .click("#btnsavecontact")
        .expect(Selector('#tblcontacts').innerText).contains('shaik@gmail.com')
});

test('Mark contact as favorite', async t => {
    const fav=Selector("i").withAttribute("id","3");
    await t
        .click(fav)
        .expect(fav.hasClass("green-color")).eql(true)
});

test('Delete contact', async t => {
    const del=Selector("i").nth(1);
    await t
        .click(del)
        // .debug()
});