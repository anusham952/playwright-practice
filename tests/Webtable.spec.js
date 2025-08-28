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


//how to extract data from the table

// for(let i=0; i< await rows.count(); i++){
//     const row=rows.nth(i);
//     const tds= row.locator('td');

//     for(let j=0; j< await tds.count()-1; j++){
//         console.log(await tds.nth(j).textContent());
//     }
// }

// read data from all the pages in a table

const pages= await page.locator('.pagination');









await page.waitForTimeout(5000);


})