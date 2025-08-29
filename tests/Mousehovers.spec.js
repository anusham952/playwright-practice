const {test, expect} = require('@playwright/test')

test('Hover action demo', async ({ page }) => {
  await page.goto('https://demoqa.com/tool-tips');
  
  // Hover over the button
  await page.locator('#toolTipButton').hover();
  
  // Wait for the tooltip to appear
  await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the Button');
});