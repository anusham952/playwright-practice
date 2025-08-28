const{test, expect}=require('@playwright/test')

test("Handling the Datepickers", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
   // await page.locator('#datepicker').fill('03/21/2000');

    //await page.waitForTimeout(3000);

    const year="2026";
    const month="March";
    const date="21";

    await page.click('#datepicker');

    while(true){
        const currentyear= await page.locator('.ui-datepicker-year').textContent();
        const currentmonth= await page.locator('.ui-datepicker-month').textContent();

        if(currentmonth == month && currentyear == year){
            break;
        }

        await page.locator('[title="Next"]').click();

    }


// picking the data using the loop

 const dates= await page.$$('//a[@class="ui-state-default"]');

 for(const bt of dates){

    if(await bt.textContent() == date){
        await bt.click();
        break;
    }


 }

    //const dateis= await page.click('//a[@class="ui-state-default"][text()=21]');

    await page.waitForTimeout(5000);




})