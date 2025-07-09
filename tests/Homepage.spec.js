const {test, expect} = require('@playwright/test');

test('homePage', async ({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');
    const pageTitle= page.title();
    console.log(pageTitle);

    //await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveTitle("STORE");
    await page.close();

})

