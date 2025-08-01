const {test , expect}=require('@playwright/test');

test("Handling the Iframes", async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
   const frames = await page.frames();
   console.log(frames.length);

   //approch 1: using the name or URL
   // const framesName = await page.frame('name');
   //const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
   //await frame.fill("[name='mytext1']", 'Hello');

   const nameelement = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    await nameelement.fill('firstframe');


   await page.waitForTimeout(5000);
})



