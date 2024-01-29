import { Locator, Page, expect } from '@playwright/test';
import { TopBarLocators as Selectors} from './top-bar-locators';

const ACTIVE_ELEMENT_COLOR: string = 'rgb(0, 224, 145)';
export class TopBar {
  readonly page: Page;
  readonly menuBusiness: Locator;
  readonly menuCareer: Locator;
  readonly pageHeader: Locator;
  readonly activeMenuElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBusiness = this.page.locator(Selectors.TOP_BAR_MENU_BUSINESS);
    this.menuCareer = this.page.locator(Selectors.TOP_BAR_MENU_CAREER);
    this.pageHeader = this.page.locator(Selectors.PAGE_HEADER);
    this.activeMenuElement = this.page.locator(Selectors.ACTIVE_MENU_ELEMENT);
  }

  public async getTopMenuElements(menuLocator: Locator): Promise<string[]> {
    const menuElements: string[] = await menuLocator.locator(Selectors.MENU_ITEM).allTextContents();
    return menuElements;
  }

  public async clickMenuItem(menuItem: string): Promise<void> {
    const element = this.page.locator(`text=${menuItem}`).first();
    await element.click();
  }

  public async waitUntilActive(menuItem: string, isBusiness: boolean = true): Promise<any> {
    const menuBar: Locator = isBusiness ? this.menuBusiness : this.menuCareer;
    const menuElement: Locator = menuBar.locator(`text=${menuItem}`).first();
    // wait until menu item will be "active"
    await expect.poll(async () => {
      const activeColor: string = await menuElement.evaluate(element => {
        return window.getComputedStyle(element, '::after').getPropertyValue('background-color');
      });
      return activeColor;
    }, {
      message: `The "${menuItem}" is not "active" after click!`,
      timeout: 10000,
    }).toBe(ACTIVE_ELEMENT_COLOR);
  }

  public async getActiveMenuElement(): Promise<string> {
    const activeElement: string = await this.activeMenuElement.innerText();
    return activeElement;
  }
}
