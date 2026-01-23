// once we defind the tag then we can't wright anything after that. ex: @sanity; test@sanity; test1@reg;
// how to execute: npx playwright test --grep "@sanity"
// how to run sanity test only and if it is part of reg,sanity just igore : npx playwright test --grep @sanity --grep-invert @reg


import{test, expect} from "@playwright/test"


test("Tags test@sanity", async({page})=>{
    console.log("this is sanity test")
})

test("tags test1@reg", async({page})=>{
    console.log("this is regretiontest")
})
test("tags test2@sanity@reg", async({page})=>{
    console.log("this is both sanity and the regretion test")
})



//npx playwright test Tags.spec.js --project chromium --headed --grep "@sanity" --grep-invert "@reg"
//npx playwright test Tags.spec.js --project chromium --headed --grep "@sanity"