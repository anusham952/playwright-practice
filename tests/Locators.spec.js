const {test, expect} = require('@playwright/test')

test('Locators', async ({page})=>{
 
   await page.goto('https://demoblaze.com/index.html');
   await page.locator('id=login2').click();
   await page.locator('id=loginusername').fill('Playwright_1');
   await page.fill('id=loginpassword','Playwright@17');
   await page.locator('//button[normalize-space()="Log in"]').click();
   await page.locator('id=logout2').click();


   const links= await page.$$('a');
   
   for(const link of links){

        const linkedText= await link.textContent();
        console.log(linkedText);
   }

    await page.waitForSelector("//div['@id=tbodyid'] //h4/a");
   const products = await page.$$("//div['@id=tbodyid'] //h4/a");

    for(const product of products){

        const productText= await product.textContent();
        console.log(productText);
    }
  

})