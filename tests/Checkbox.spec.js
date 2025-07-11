const {test , expect} = require('@playwright/test');
test("Handling Checkboxs", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="sunday"]').check();
    await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
    await page.locator('//input[@id="sunday"]').isChecked();
    await page.locator('//input[@id="monday"]').check();
    expect(await page.locator('//input[@id="monday"]').isChecked()).toBeTruthy();
    await page.locator('//input[@id="monday"]').isChecked();
    await page.locator('//input[@id="monday"]').uncheck();
    await page.locator('//input[@id="sunday"]').uncheck();

    //Multiple checkboxes
    const box=[page.locator('//input[@id="sunday"]'),
               page.locator('//input[@id="monday"]'),
               page.locator('//input[@id="tuesday"]')];

            for(const boxes of box){
                await boxes.check();
                console.log(await boxes.isChecked());
                await expect(boxes).toBeChecked();
                await boxes.uncheck();

            }

    await page.waitForTimeout(3000);

})