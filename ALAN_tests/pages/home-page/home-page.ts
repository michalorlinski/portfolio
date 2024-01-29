import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { HomePageLocators as Selectors } from './home-page-locators';
import { TopBar } from '../../components/top-bar/top-bar';

interface Dictionary<T> {
  [key: string]: T;
}
let topBar: TopBar;

export class HomePage extends BasePage {
  readonly url: string;
  readonly pageHeaderTitle: Locator;
  readonly dateIndicator: Locator;

  constructor(page: Page) {
    super(page);
    topBar = new TopBar(page);
    this.url = '/';

    this.pageHeaderTitle = this.page.locator(Selectors.HOME_PAGE);
    this.dateIndicator = this.page.locator(Selectors.HOME_PAGE_TOP);
  }

  async gotoHomePage(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: 'domcontentloaded' });
  }
}
