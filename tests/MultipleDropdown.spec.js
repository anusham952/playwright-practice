const{test , expect}=require('@playwright/test');
test("Handling dropdown", async({page})=>{

    //selecting multiple options from the multi dropdown
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Red','Blue','Green']);

    //Assertions

    //checking the number od options in the dropdown
    const colors = await page.locator('#colors option');
    await expect(colors).toHaveCount(7);
    
    //checking the number of options in the dropdown using the js array
    const options= await page.$$('#colors option');
    await expect(options.length).toBe(7);


    //checking the value is presence in the dropdown
    const content=await page.locator('#colors').textContent();
    console.log(await content);
    await expect(content.includes('Blue')).toBeTruthy();


    await page.waitForTimeout(5000);
})