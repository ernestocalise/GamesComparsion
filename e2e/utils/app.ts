require('dotenv').config();

import * as puppeteer from 'puppeteer';
import * as PuppeteerHar from 'puppeteer-har';
import * as fs from 'fs';
import CONFIG from './../environment/env.config';
import { Utility } from './Utility';

export class App {
  public page: puppeteer.Page;
  public browser: puppeteer.Browser;
  private har: PuppeteerHar;
  private testName: string;

  constructor() {
    Utility.Init();
  }

  public async start(): Promise<any> {
    try {
      this.browser = await this.launchBrowser();
      this.page = await this.browser.newPage();

      if (CONFIG.E2E_GENERATE_REPORT) {
        await this.generateNetworkReport();
      }

      if (CONFIG.E2E_SLOW_CONNECTION) {
        const client = await this.page.target().createCDPSession();

        // Set throttling property
        await client.send('Network.emulateNetworkConditions', {
          offline: false,
          downloadThroughput: (200 * 1024) / 8,
          uploadThroughput: (200 * 1024) / 8,
          latency: 20
        });
      }

      return this.page.setViewport({
        height: 1200,
        width: 1519
      });
    } catch (e) {
      console.log('Error to creation page: ', e);
      throw e;
    }
  }

  public async accessWeb(url) {
      return this.page.goto(url);
  }


  private launchBrowser(): Promise<puppeteer.Browser> {
    const puppeteerArgs = CONFIG.E2E_HEADLESS ? ['--no-sandbox', '--disable-setuid-sandbox'] : ['--start-maximized']; // '--auto-open-devtools-for-tabs'

    return puppeteer.launch({ headless: CONFIG.E2E_HEADLESS, args: puppeteerArgs, defaultViewport: null });
  }

  private async generateNetworkReport() {
    const path = 'reports/';
    const filePath = `${path}${this.testName}.har`;
    fs.mkdirSync(path, { recursive: true });
    this.har = new PuppeteerHar(this.page);
    return this.har.start({ path: filePath, saveResponse: true });
  }

  public authenticate(): Promise<void> {
    return this.page.authenticate({
      username: CONFIG.SET_COOKIE_USER,
      password: CONFIG.SET_COOKIE_PASSWORD
    });
  }
}
