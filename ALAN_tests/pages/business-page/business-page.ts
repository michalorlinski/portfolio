import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { BusinessPageLocators as Selectors } from './business-page-locators';
import { TopBar } from '../../components/top-bar/top-bar';
import { PageFooter } from '../../components/page-footer/page-footer';

interface Dictionary<T> {
  [key: string]: T;
}
let topBar: TopBar;
let pageFooter: PageFooter;

export class BusinessPage extends BasePage {
  readonly url: string;
  readonly offerButton: Locator;
  readonly pageHeader: Locator;

  constructor(page: Page) {
    super(page);
    topBar = new TopBar(page);
    pageFooter = new PageFooter(page);
    this.url = '/business/';

    this.offerButton = this.page.locator(Selectors.GET_OFFER_BUTTON);
    this.pageHeader = topBar.pageHeader;
  }

  public async getContactFooter(): Promise<Dictionary<string | null>> {
    return await pageFooter.getContactInfo();
  }
}
