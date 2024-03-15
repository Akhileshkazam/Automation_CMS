const {test,expect} = require('@playwright/test');
const { extname } = require('node:path/win32');




test ('Browse Context-Validating Error login',async({browser}) =>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   const email = page.locator('#large-input');
   await page.goto("https://novo.kazam.in/auth/login");
   console.log(await page.title());
   // css login with valid login credential
   await email.type("akhilesh@kazam.in") 
   await page.locator("#password").type("Akbl@1724");
   await page.getByRole("button", {name: "Login"}).click();
   await page.goto("https://novo.kazam.in/org");
});

