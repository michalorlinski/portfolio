# 🎭 Playwright - tests

[![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-120.0.6099.235-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-121.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-17.3-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop -->

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->120.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.3<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->121.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |

Headless execution is supported for all browsers on all platforms.

System requirements:
- Node.js 16+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.


## Installation

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

## Install and Setup test environment

To install and setup environment we need to to the following steps:

1. Install `Node.js` (v20) and `npm` (v10) [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    - I recommend to use [NVM](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/) (Node Version Manager) to install a specific (or several different) version of node.
2. Install needed packages: [Install packages and Playwright](#install),
3. Make settings: [Settings](#setup)

### Install

Put the following command into the `/tests` folder

```
npm install
```
to install all needed libraries and dependencies (based on the files: [package.json]() and [package-lock.json]()).
The `node_modules` folder should be created when the installation process is complete. You can check Playwright version as sanity checks:
```
npx @playwright/test --version
```
Then install `chromium` browser:
```
npx playwright install --chromium
```

To run a simple basic test You need to do some Settings first, so please go through the following Setup step:

### Setup

To run tests we need to configure our tests environment first:

1. Check if `.env` file exists - update it by the following data:
    - `UI_URL="https://alan-systems.com/pl/dla-biznesu/"`
    - ``

### Update
1. Once in a while you have to update Playwright browser by the following command:
    - update `chromium` browser only:
    ```
    npx playwright install --chromium
    ```
    - update / install all browsers (chromium, webkit, firefox) 
    ```
    npx playwright install
    ```

2. To update Playwright (install latest version):
   ```
   npm install -D @playwright/test@latest
   ```

## Install Playwright only

To install only Playwright tool (without other libraries)

### Using init command

The easiest way to get started with Playwright Test is to run the init command.

```Shell
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

### Manually

Add dependency and install browsers.

```Shell
npm i -D @playwright/test
# or
npx playwright install-deps
# install supported browsers
npx playwright install
```

You can optionally install only selected browsers, see [install browsers](https://playwright.dev/docs/cli#install-browsers) for more details. Or you can install no browsers at all and use existing [browser channels](https://playwright.dev/docs/browsers).

* [Getting started](https://playwright.dev/docs/intro)
* [Installation configuration](https://playwright.dev/docs/installation)
* [API reference](https://playwright.dev/docs/api/class-playwright)

### Powerful Tooling

Looking for Playwright for [TypeScript](https://playwright.dev/docs/intro)/[JavaScript](https://playwright.dev/docs/intro)?

## Resources

* [Documentation](https://playwright.dev/docs/intro)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Changelog](https://github.com/microsoft/playwright/releases)

# Helpers

