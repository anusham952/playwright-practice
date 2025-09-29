const {test , expect}= require('@playwright/test')

let page;

test.beforeEach('Hook' , async({browser})=>{

    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol1');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();



    test.afterEach(async()=>{

        await page.locator('#logout2').click();
    })
})
