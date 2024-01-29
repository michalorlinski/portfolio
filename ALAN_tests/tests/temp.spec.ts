// test.describe('Home Page Tests', () => {
//     let homePage: HomePage;
//     let businessPage: BusinessPage
  
//     test.beforeEach(async ({ page }) => {
//       homePage = new HomePage(page);
//       businessPage = new BusinessPage(page);
//     });

//     test.skip('C2: All fields are required on the apply offer page', async () => {
//       /*
//       {test documentation page}
//       Check validation of required fields in job offer contact form
//       Given: Home Page is loaded
//       When: user navigate to the Test Automation Developer offer page
//       And: try to apply - click APPLY button
//       Then: all fields should be required
//       */
//       // Go to Home Page
        
//       // waiting until load Home Page Page
//       const homePageHeader: Locator = homePage.pageHeaderTitle;
//       await expect(homePageHeader).toContainText(testParameters['homePage'].pageName);
  
//       // Logout
//       const avatarIcon: Locator = topBar.AlanSystem;
//       await avatarIcon.click();
  
//       // Check if redirect to Login Page
//       await expect(loginPage.AlanLogo).toBeVisible();
//       await expect(loginPage.loginForm).toBeVisible();
//     });
// });