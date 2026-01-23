import{test , expect} from "@playwright/test"

// annotation 1 only() method
// test.only("test1, only", async({page})=>{
//     console.log("the only test annotation ")
// })


// annotation 2 skip() method
// test("test2, skip", async({page, browserName})=>{
//     console.log("the test is running")
//     if(browserName==="firefox"){
//         test.skip()
//     }
// })


// annotation 3 fixme() method,  same like skip() method until we fix it, nothing will execute
//annotation 3 fixme()
// test("test3, fixme", async({page})=>{
//     test.fixme()
//     console.log("this is an fixme test annotation")
// })


//anootation 4 slow() method,
// it slowdown the time 3 times
//test.setTimeout(5000)



test("test4", async({page})=>{
    test.slow()
    await page.goto("https://www.demoblaze.com/")
    console.log("the test is executed")
})



