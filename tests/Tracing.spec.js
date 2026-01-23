// in the manual way we can edit it in playwright.config.js file
// Open the Playwright.config.js file
// use -> trace -> screenshot: "on/off", video:"on/off/retain-on-failure",

import{test, expect} from "@playwright/test"

test("Recording the video", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();
    await expect(page.locator("#logout2")).toBeVisible();
    
})