import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Playwright_1');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Playwright@17');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.locator('#videoModal').getByText('Close', { exact: true }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).click();
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Message:' }).click();
  await page.getByRole('textbox', { name: 'Message:' }).fill('hi there!');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});