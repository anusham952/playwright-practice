const{test, expect} = require('@playwright/test');
test('Handling the input box', async ({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.locator("//a[i[contains(@class, 'fa-lock')]]").click();
    await expect.soft(await page.locator("//input[@data-qa='login-email']")).toBeVisible();
    await expect(await page.getByPlaceholder('Password')).toBeEmpty();
    await expect(await page.locator("//input[@data-qa='login-email']")).toBeEditable();



    await page.locator("//input[@data-qa='login-email']").fill('anu@gmail.com');
    await page.locator("//input[@data-qa='login-password']").fill('anusha');
    await page.waitForTimeout(5000);

})