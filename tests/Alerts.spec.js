const {test, expect}=require('@playwright/test');

test.skip("Alert with Ok", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling the dialog window handler alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(5000);

})


test.skip("Confirm dialog ok", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling the dialog window for confirm
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })

    await page.locator("//button[@id='confirmBtn']").click();
    await page.waitForTimeout(5000);
})


test("Promt dialog ok", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling the dialog window for confirm
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Anusha');
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Anusha! How are you today?')
    await page.waitForTimeout(5000);
})

