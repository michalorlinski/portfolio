import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page/home-page';
import { BusinessPage } from '../pages/business-page/business-page';
import testData from './data.json';
import { TopBar } from '../components/top-bar/top-bar';

interface Dictionary<T> {
  [key: string]: T;
}

const BUSINESS_PAGE_HEADER: Dictionary<string> = testData.businessPage.pageHeader;
const TOP_BAR_MENU: Dictionary<string[]> = testData.businessPage.topBarMenu;
const PAGE_FOOTER_CONTACT = testData.pageFooter.contact;
const CAREER_ITEM: string = "Career";

test.describe('Business Page Tests', () => {
  let businessPage: BusinessPage;
  let topBar: TopBar;
  
  test.beforeEach(async ({ page }) => {
    businessPage = new BusinessPage(page);
    topBar = new TopBar(page);
    await businessPage.gotoPage();
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

    await test.step('Load business page - page header is visible', async () => {
      
      // Check if page is correctly loaded and page header is visible
      await expect(businessPage.pageHeader).toBeVisible();
      const pageHeaderText: string = await businessPage.pageHeader.innerText();
      expect(pageHeaderText).toContain(BUSINESS_PAGE_HEADER.business);
    });

    await test.step('Business view - top bar menu and page footer', async () => {
      
      // Business view - check if top bar menu is visible and page footer is displayed
      await expect(topBar.menuBusiness).toBeVisible();
      let topMenuElements: string[] = await topBar.getTopMenuElements(topBar.menuBusiness);
      topMenuElements = topMenuElements.filter(n => n);
      expect(topMenuElements).toMatchObject(TOP_BAR_MENU.business);

      // check each page element on the top bar menu and page footer
      for (const elem of topMenuElements.slice(0, -1)) {
        await topBar.clickMenuItem(elem);
        await topBar.waitUntilActive(elem);
      const contactFooter = await businessPage.getContactFooter();
      expect(contactFooter).toMatchObject(PAGE_FOOTER_CONTACT);
      }
    });

    await test.step('Career view - top bar menu and page footer', async () => {
      
      // Career view - check if top bar menu is visible and page footer is displayed
      await topBar.clickMenuItem(CAREER_ITEM);
      await expect(topBar.menuCareer).toBeVisible();
      let topMenuElements: string[] = await topBar.getTopMenuElements(topBar.menuCareer);
      topMenuElements = topMenuElements.filter(n => n);
      expect(topMenuElements).toMatchObject(TOP_BAR_MENU.career);

      // check each page element on the top bar menu and page footer
      for (const elem of topMenuElements.slice(0, -1)) {
        await topBar.clickMenuItem(elem);
        await topBar.waitUntilActive(elem, false);
        const contactFooter = await businessPage.getContactFooter();
        expect(contactFooter).toMatchObject(PAGE_FOOTER_CONTACT);
      }
    });
  });
});
