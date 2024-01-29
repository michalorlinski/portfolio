import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 */
dotenv.config({ path: path.resolve(__dirname, '.env') , override: true});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  // globalSetup: './utils/global-setup.test.ts',
  // globalTeardown: './utils/global-teardown.test.ts',
  snapshotDir: './snapshots',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: { timeout: 30 * 1000 }, // timeout for expect() calls
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. */
  reporter: [
    ['junit', { outputFile: 'TESTS-results.xml', open: 'never' }]
    // ['playwright-testrail-reporter'] // uncomment to report result to TestRail
  ],
  /* Shared settings for all the projects below */
  use: {
    baseURL: process.env.UI_URL, // Base URL to use in actions like `await page.goto('/')`.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // Traces - collect trace when retrying the failed test
    navigationTimeout: 30 * 1000, // timeout for await page.locator() calls
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chromium',
      use: {
        // Run test in specified size
        viewport: { width: 1920, height: 1080 },
        headless: true,
        // Run test in maximized window
        // viewport: null,
        // launchOptions: {
        //   args: ["--start-maximized"]
        // }
      },
      retries: 1,
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'playwright-report/',

};

export default config;
