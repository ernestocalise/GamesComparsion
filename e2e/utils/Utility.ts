import CONFIG from '../environment/env.config';
import * as puppeteer from 'puppeteer';
import { SELECTORS } from '../models/selectors';
import moment = require('moment');
// Abstract class implemented into Selectors and XPath,
// Every method uses getItem and WaitForItem that match "Wait For XPath"
// And WaitForSelector from puppeteer
export abstract class AbsUtility {
  public WAIT_FOR_DELAY = 200;
  public TYPE_DELAY = 100;
  public abstract getItem(page: puppeteer.Page | puppeteer.Frame, selector: string): Promise<any>;
  public abstract waitForItem(page: puppeteer.Page | puppeteer.Frame, selector: string, option?: any): Promise<any>;
  public async getText(page: puppeteer.Page | puppeteer.Frame, selector: string) {
    const checkedRadiosSel = await this.getItem(page, selector);
    const checkedRadiosText = [];
    for (let i = 0; i < checkedRadiosSel.length; i++) {
      const chkRadio = await (await checkedRadiosSel[i].getProperty('innerText')).jsonValue();
      checkedRadiosText.push(chkRadio);
    }
    return checkedRadiosText;
  }

}
export class Selector extends AbsUtility {
  public async getItem(page: puppeteer.Page | puppeteer.Frame, selector: string): Promise<any> {
    return await page.$$(selector);
  }
  public async waitForItem(page: puppeteer.Page | puppeteer.Frame, selector: string, option?: any): Promise<any> {
    return option === undefined ? await page.waitForSelector(selector) : await page.waitForSelector(selector, option);
  }

}
export class XPath extends AbsUtility {
  public async getItem(page: puppeteer.Page | puppeteer.Frame, selector: string): Promise<any> {
    return await page.$x(selector);
  }
  public async waitForItem(page: puppeteer.Page | puppeteer.Frame, selector: string, option?: any): Promise<any> {
    return option === undefined ? await page.waitForXPath(selector) : await page.waitForXPath(selector, option);
  }
}

export class Utility {
  public static Selector: Selector;
  public static XPath: XPath;
  public static TextBuilder: Builder;
  public static Init() {
    Utility.Selector = new Selector();
    Utility.XPath = new XPath();
    Utility.TextBuilder = new Builder();
  }
  public static async Wait(timeout: number) {
    return new Promise((res, rej) => {
      setTimeout(() => res('Now its done!'), timeout);
    });
  }
  public static isUndefined(item: any) {
    if (typeof(item) === typeof(undefined)) {
      return true;
    } else {
      return false;
    }
  }
  public static isNull(item: any) {
    if (typeof(item) === typeof(null)) {
      return true;
    } else {
      return false;
    }
  }
  public static isNullOrUndefined(item: any) {
    if (Utility.isNull(item) || Utility.isUndefined(item)) {
      return true;
    } else {
      return false;
    }
  }
  public static stringIsNotEmpty(item: any) {
    if (typeof(item) === typeof('ciao') && item !== '') {
      return true;
    } else {
      return false;
    }
  }
  public static isNaN(item: any) {
    if (typeof(item) !== typeof(NaN)) {
      return true;
    } else {
      return false;
    }
  }
  public static isTypeOf(item: any, type: any) {
    if (typeof(item) === typeof(type)) {
      return true;
    } else {
      return false;
    }
  }
  public static async autoScroll(page: puppeteer.Page) {
    await page.evaluate(async () => {
      await new Promise<void>((resolve, reject) => {
        let totalHeight = 0;
        const distance = 60;
        const timer = setInterval(() => {
          // tslint:disable-next-line: prefer-const
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 30);
      });
    });
  }
  public static async SetHighViewport(page: puppeteer.Page) {
    await page.setViewport({
      height: 2000,
      width: 1200
    });
  }
  public static async RestoreViewport(page: puppeteer.Page) {
    await page.setViewport({
      height: 1200,
      width: 1519
    });
  }
  public static splitArrayData(arr: object[], size: number): Array<Object> {
    const result = [];
    const parts = Math.ceil(arr.length / size);
    for (let i = 0; i < size; i++) {
      const partial = arr.length >= parts ? arr.splice(0, parts) : arr.splice(0, arr.length);
      result.push(partial);
    }
    return result;
  }
  public static async Poll(callback: Promise<any>, maxAttempt: number, timeout: number) {
    const actualAttempt = 0;
    let status = false;
    let response;
    while (actualAttempt < maxAttempt && !status) {
      try {
        response = await callback;
        status = true;
      } catch {
        await Utility.Wait(timeout);
      }
    }
    return response !== undefined ? response : false;
  }
}
export class SelectorBuilder {
  public SelectoraddNthChild(Init: string, Nth: string | number, selector: string): string {
    return Init + ':nth-child(' + Nth + ')' + selector;
  }
  public selectorAddTrackValue(selector, operation, value) {
    return selector + '[trackvalue' + operation + '"' + value + '"]';
  }
  public selectorAddPropertySelector(selector, property, operation, value) {
    return selector + '[' + property + operation + '"' + value + '"]';
  }
}
export class XPathBuilder {
  public xPathAddContainsText(xPath: string, value: string): string {
    return xPath + '[contains(text(),"' + value + '")]';
  }
  public xPathAddTextValue(xPath, value) {
    return xPath + '[text()="' + value + '"]';
  }
  public xPathAddStartsWithText(xPath, value) {
    return xPath + '[starts-with(text(),"' + value + '")]';
  }
}
export class Builder {
  public CssOperations: any;
  constructor() {
    this.SelectorBuilder = new SelectorBuilder();
    this.XPathBuilder = new XPathBuilder();
    this.CssOperations = {
      EQUALS_TO: '=',
      CONTAINS: '~=',
      STARTS_WITH: '^=',
      ENDS_WITH: '$=',
      CONTAINS_SUBSTRING: '*='
    };
  }
  public SelectorBuilder: SelectorBuilder;
  public XPathBuilder: XPathBuilder;
  public createDateByFormattedDate(dateInput: string, dayToAdd?: number) {
    const arrDate = Utility.TextBuilder.formatDate(dateInput).split('/');
    const day = parseInt(arrDate[0], 10);
    const mnt = parseInt(arrDate[1], 10);
    const yrs = parseInt(arrDate[2], 10);
    const dd = dayToAdd > 0 ? dayToAdd : 0;
    return moment.utc({ years: yrs, month: mnt, day: day }).add(dd, 'days').toDate();
  }
  public formatDate(data: any): string {
    if (data) {
      const date_ob = new Date(data);
      const date = ('0' + date_ob.getDate()).slice(-2);
      const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
      const year = date_ob.getFullYear();
      return date + '/' + month + '/' + year;
    }
    return '';
  }
}
