import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { HomePageLocators as Selectors } from './home-page-locators';
import { TopBar } from '../../components/top-bar/top-bar';
import { PageFooter } from '../../components/page-footer/page-footer';

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
    await this.page.waitForURL(`**${this.url}`, { waitUntil: 'networkidle' });
  }

  async topBarMenuElements(): Promise<Locator[]> {
    const topBarElements: Locator[] = await topBar.getMenuElements();
    return tableHeaderElements;
  }

  async tableHeaderTexts(): Promise<string[]> {
    const tableHeaderTexts: string[] = await tableComponent.getTableHeaderTexts(this.table);
    return tableHeaderTexts;
  }

  async tableRows(): Promise<Locator[]> {
    const tableRows: Locator[] = await this.tableContainer.locator(Selectors.TABLE_ROWS).all();
    return tableRows;
  }

  public rowCells(row: Locator): Dictionary<any> {
    let cells: Dictionary<any> = {
      statusIcon: row.locator(Selectors.TABLE_COLUMN.ELEVATOR_ID).locator(Selectors.ELEVATOR_HEALTH_STATUS),
      name: row.locator(Selectors.TABLE_COLUMN.ELEVATOR_ID).locator(Selectors.ELEVATOR_NAME),
    };
    return cells;
  }

  async goToSickElevators(): Promise<void> {
    await this.sickElevatorsTab.click();
  }
}
