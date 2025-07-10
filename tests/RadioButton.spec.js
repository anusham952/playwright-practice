const {test, expect}= require('@playwright/test');
test("Handle the Radiobutton", async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//label[@for="gender-radio-1"]').click();
    await expect.soft(page.locator('//input[@id="gender-radio-1"]')).toBeChecked();
    await expect(page.locator('//label[@for="gender-radio-2"]').isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);

})