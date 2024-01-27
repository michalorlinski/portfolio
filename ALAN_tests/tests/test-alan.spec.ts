import { Locator, test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page/home-page';
import testData from './data.json';

test.describe('Basic Page Tests', () => {
    let homePage: HomePage;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
  
      await page.goto('/', { waitUntil: 'domcontentloaded' });
    });
  
    test('C1: Top bar menu and page footer are displayed correctly', async () => {
      /*
      {test documentation page}
      Check the top bar menu and the footage on the /business page
      Given: user is go the the {URL}/business page
      When: /business page is loaded
      Then: top bar menu options are visible
      And: page footer is displayed correctly
      */
      // Login to dashboard
      await expect(homePage.loginForm).toBeVisible();
    });
  
    test('C2: All fields are required on the apply offer page', async () => {
      /*
      {test documentation page}
      Check validation of required fields in job offer contact form
      Given: Home Page is loaded
      When: user navigate to the Test Automation Developer offer page
      And: try to apply - click APPLY button
      Then: all fields should be required
      */
      // Go to Home Page
        
      // waiting until load Home Page Page
      const homePageHeader: Locator = homePage.pageHeaderTitle;
      await expect(homePageHeader).toContainText(testParameters['homePage'].pageName);
  
      // Logout
      const avatarIcon: Locator = topBar.AlanSystem;
      await avatarIcon.click();
  
      // Check if redirect to Login Page
      await expect(loginPage.AlanLogo).toBeVisible();
      await expect(loginPage.loginForm).toBeVisible();
    });
  });