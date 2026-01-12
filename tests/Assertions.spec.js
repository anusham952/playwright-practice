const {test , expect}= require('@playwright/test');

test('Assertions', async ({page})=>{
        await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
        await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
        await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');
        const elemets= await page.getByAltText('nopCommerce demo store');
        await expect(elemets).toBeVisible();
        const elems= await page.getByPlaceholder('Search store');
        await expect(elems).toBeEnabled();
        const radioButton = await page.locator('#gender-male');
        await radioButton.click();
        await expect(radioButton).toBeChecked();
        const checkBox = await page.locator('#Newsletter');
       // await expect(checkBox).toBeChecked();
        const atribute = await page.locator('#register-button');
        await expect(atribute).toHaveAttribute('type','submit');
        await expect(await page.locator('.page-title h1')).toHaveText('Register');
        await expect(await page.locator('.page-title h1')).toContainText('Reg');
        //toHaveValue
        const name= await page.locator('#FirstName');
        name.fill('mynameis');
        await expect(name).toHaveValue('mynameis');
        


        


        

    })
