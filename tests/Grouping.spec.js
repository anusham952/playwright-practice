import{ test, expect} from '@playwright/test'

//beforeAll
test.beforeAll(()=>{
    console.log('beforAll the test...')
})

test.afterAll(()=>{
    console.log('AfterAll the test...')
})

//before each test

test.beforeEach(()=>{ console.log('beforeEach test')})
//afterEach test
test.afterEach(()=>{console.log('afterEach test')})

test.describe("Group1", ()=>{
    test("test1", async({page})=>{
        console.log('this is the first test')
    })

    test("test2", async({page})=>{
        console.log('This is the second test')
    })
})

test.describe.skip(()=>{
    test("Test3", async({page})=>{
        console.log("this is the 3rd test")
    })
})
