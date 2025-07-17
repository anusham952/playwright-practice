const{test, expect} = require('@playwright/test');
test('Handling the Autodropdown', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('cloths');

    await page.waitForSelector('//div[contains(@id, "sac-suggestion")]');

    const suggestElems=await page.locator('//div[contains(@id, "sac-suggestion")]//span');
    await suggestElems.nth(2).click();

    await page.waitForTimeout(5000);
})