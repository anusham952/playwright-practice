const {test , expect} = require('@playwright/test');

test("Get user data", async ({request})=>{
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(await response.json());

    expect(response.status()).toBe(200);
})

var userID;

test("Create user", async({request})=>{
    const createuser = await request.post('https://reqres.in/api/users',{
        data:{ "name":"anusha", "job":"tester"},
        headers: {"x-api-key":"reqres-free-v1"}
    })

    console.log(await createuser.json());
    expect(createuser.status()).toBe(201);

    const res= await createuser.json();
    userID=res.id;
})

test("Update user", async({request})=>{
    const createuser = await request.put('https://reqres.in/api/users/'+userID,{
        data:{ "name":"anusha", "job":"Automation"},
        headers: {"x-api-key":"reqres-free-v1"}
    })

    console.log(await createuser.json());
    expect(createuser.status()).toBe(200);

})

test("Delete user", async({request})=>{
    const createuser = await request.delete('https://reqres.in/api/users/'+userID,
        {headers: {"x-api-key":"reqres-free-v1"}})
    expect(createuser.status()).toBe(204);

})
