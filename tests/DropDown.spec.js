const{test ,  expect} = require('@playwright/test');

test("Handling DropDown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('Canada');
    await page.locator('#country').selectOption({value:"uk"});
    await page.locator('#country').selectOption({index: 5});
    await page.selectOption('#country', "india");

    const count= await page.locator('#country option');
    await expect(count).toHaveCount(10);
    console.log(await count.count().length);

    const options= await page.$$('#country option');
    let status=false;
    for(const option of options){
        //console.log(await option.textContent());
        const value=await option.textContent();
        if(value.includes('China')){
            status=true;
            console.log(value);
            break;
        }

    }
    console.log(status);


    await page.waitForTimeout(3000);
})