const{test, expect} = require('@playwright/test');
test('Handling the input box', async ({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.locator("//a[i[contains(@class, 'fa-lock')]]").click();
    await expect.soft(await page.locator("//input[@data-qa='signup-name']")).toBeVisible();
    await expect(await page.getByPlaceholder('Password')).toBeEmpty();
    await expect(await page.locator("//input[@data-qa='login-email']")).toBeEditable();

    await page.locator("//input[@data-qa='login-email']").fill('anusham952@gmail.com');
    await page.locator("//input[@data-qa='login-password']").fill('Anusha@17');
    await page.locator('//button[@data-qa="login-button"]').click();
    await page.waitForTimeout(3000);

})