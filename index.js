const puppeteer = require('puppeteer');
const fs = require('fs');

const dynamically_link = "preview_link";

// Rest of your code

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navigate to the target web page
    await page.goto(dynamically_link);
  
    // Execute the provided JavaScript code in the page context
    const result = await page.evaluate(() => {
      return window.bubble_run_derived['{"function_name":"DefaultValues","args":[]}'];
    });
  
// Save the result to a JSON file
const jsonResult = JSON.stringify(result, null, 2);
fs.writeFileSync('result.json', jsonResult, 'utf-8');

console.log('Result saved to result.json');

await browser.close();
})();