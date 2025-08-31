const {test, expect} = require('@playwright/test')

test("Mouse doublrclick action", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const double=  await page.locator('//button[normalize-space()="Copy Text"]');
    await double.dblclick();

    const text= await page.locator('#field2');

    await expect(text).toHaveValue('Hello World!');

   await page.waitForTimeout(5000);
})