import {test, expect} from '@playwright/test'

test("Capturing the screenshorts", async({page})=>{
    await page.goto("https://demo.opencart.com/");
    await page.screenshot({ path:'tests/screenshorts/'+Date.now()+'HomePage.png'});

})