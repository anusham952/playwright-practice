const {test , expect} = require('@playwright/test')

test("Handling webtables", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    //number of rows and colums
    const columns = await table.locator('thead tr th');
    console.log(await columns.count());
    expect(await columns.count()).toBe(4);


    const rows= await table.locator('tbody tr');
    console.log(await rows.count());
    expect(await rows.count()).toBe(5);

//single product
// select check box for product 4

// const singleSelet= rows.filter({
//     has: page.locator('td'),
//     hasText:'Smartwatch'
// })

// await singleSelet.locator('input').click();

//select multiple boxes using the reusable function

async function multiSelect(rows, page, name){
    const items = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await items.locator('input').check();
    await page.waitForTimeout(3000);

}

await multiSelect(rows,page,'Laptop');
await multiSelect(rows,page,'Tablet');

await page.waitForTimeout(5000);


})