const{test, expect} = require('@playwright/test')

let page;

test.beforeAll("automate app", async({browser})=>{
    page= await browser.newPage();

    //open browser and login
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();
})

test.afterAll(async()=>{
    await page.locator('#logout2').click();
})


test("automateApp", async()=>{
//app validate
const products= await page.$$('.hrefch')
expect(products).toHaveLength(9);

})



test("add product to cart", async()=>{

//add to the cart
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
await page.locator('//a[normalize-space()="Add to cart"]')

//dialogbox
page.on("dialog", async dialog=>{
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();
})

})
