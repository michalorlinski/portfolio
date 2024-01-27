import { Locator, Page } from '@playwright/test';
import { TopBarLocators as Selectors} from './top-bar-locators';

export class TopBar {
  readonly page: Page;
  readonly topBarMenu: Locator;
  readonly topBarLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topBarMenu = this.page.getByTestId(Selectors.TOP_BAR_MENU);
    this.topBarLogo = this.topBar.getByTestId(Selectors.TOP_BAR_LOGO);
  }
}
