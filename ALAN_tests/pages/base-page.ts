import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = '/';
  }

  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }

  async gotoPage(myUrl: string = '') {
    await this.page.goto(myUrl || this.url);
    await this.page.waitForURL(`**${myUrl || this.url}`, { waitUntil: 'domcontentloaded' });
  }

  async getLocatorsText(locators: Locator[]): Promise<(string | null)[]> {
    return Promise.all(locators.map(async locator => (await locator.textContent()) || ''));
  }
}
