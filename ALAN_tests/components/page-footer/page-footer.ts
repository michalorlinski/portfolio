import { Locator, Page } from '@playwright/test';
import { PageFooterLocators as Selectors} from './page-footer-locators';

export class PageFooter {
  readonly page: Page;
  readonly pageFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageFooter = this.page.locator(Selectors.PAGE_FOOTER);
  }
}
