import { Locator, Page } from '@playwright/test';
import { PageFooterLocators as Selectors} from './page-footer-locators';

interface Dictionary<T> {
  [key: string]: T;
}

export class PageFooter {
  readonly page: Page;
  // contact section
  readonly contact: Locator;
  readonly contactTitle: Locator;
  readonly contactAddress: Locator;
  readonly contactPhone: Locator;
  readonly contactEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    // contact section
    this.contact = this.page.locator(Selectors.PAGE_FOOTER_CONTACT);
    this.contactTitle = this.contact.locator(Selectors.CONTACT_TITLE);
    this.contactAddress = this.contact.locator(Selectors.CONTACT_ADDRESS);
    this.contactPhone = this.contact.locator(Selectors.CONTACT_PHONE);
    this.contactEmail = this.contact.locator(Selectors.CONTACT_EMAIL);
  }

  private convertAddress = (rawAddress: string | null): string | null => {
    // convert raw address to more common one: `street nr, zip-code City`
    if (typeof rawAddress === 'string') {
      rawAddress = rawAddress.trim().replace(/\n/g, ', ');
    }
    return rawAddress;
  };

  public async getContactInfo(): Promise<Dictionary<any>> {
    const contactInfo: Dictionary<any> = {
      title: await this.contactTitle.textContent(),
      address: this.convertAddress(await this.contactAddress.textContent()),
      phone: await this.contactPhone.textContent(),
      email: await this.contactEmail.textContent()
    };
    return contactInfo;
  }
}
