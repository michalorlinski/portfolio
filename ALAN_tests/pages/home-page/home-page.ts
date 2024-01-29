import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../base-page';
import { HomePageLocators as Selectors } from './home-page-locators';
import { TopBar } from '../../components/top-bar/top-bar';

let topBar: TopBar;

export class HomePage extends BasePage {
  readonly url: string;
  readonly pageHeader: Locator;
  // navigation
  readonly pageHeaderTitleRight: Locator;
  readonly hopOnBoardBtn: Locator;
  readonly findJobOfferBtn: Locator;
  readonly headerJobOffer: Locator;
  // apply form
  readonly applyBtn: Locator;
  readonly applyCheckbox1: Locator;
  readonly applyCheckbox2: Locator;
  readonly uploadFileBtn: Locator;
  readonly errorMessage: Locator;


  constructor(page: Page) {
    super(page);
    topBar = new TopBar(page);
    this.url = '/';
    this.pageHeader = topBar.pageHeader;
    // navigation
    this.pageHeaderTitleRight = this.page.locator(Selectors.PAGE_HEADER_RIGHT);
    this.hopOnBoardBtn = this.page.locator(Selectors.HOP_ON_BOARD_BTN);
    this.findJobOfferBtn = this.page.locator(Selectors.FIND_JOB_OFFER_BTN);
    this.headerJobOffer = this.page.locator(Selectors.JOB_OFFER_HEADER);
    // apply form
    this.applyBtn = this.page.locator(Selectors.APPLY_BTN);
    this.applyCheckbox1 = this.page.locator(Selectors.APPLY_CHECKBOX_1).locator(Selectors.INPUT_BTN);
    this.applyCheckbox2 = this.page.locator(Selectors.APPLY_CHECKBOX_2).locator(Selectors.INPUT_BTN);
    this.uploadFileBtn = this.page.locator(Selectors.UPLOAD_FILE).locator(Selectors.INPUT_BTN);
    this.errorMessage = this.page.locator(Selectors.ERROR_MSG);
  }

  public async gotoHomePage(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: 'domcontentloaded' });
  }

  public async clickButton(btnName: string): Promise<void> {
    const button = this.page.locator(`text=${btnName}`).first();
    await button.click();
  }

  public getJobOffer(jobName: string): Locator {
    const jobOffer = this.page.locator(`text=${jobName}`).first();
    return jobOffer;
  }

  public async waitUntil(element: Locator, textContains: string): Promise<any> {
    // wait until element contains text
    await expect.poll(async () => {
      const elementText: string = await element.innerText();
      return elementText;
    }, {
      message: `The "${element}" with text "${textContains}" cannot be found!`,
      timeout: 10000,
    }).toBe(textContains);
  }
}
