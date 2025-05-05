---
title: Help improve the docs
sidebar_position: 999
---

You can contribute to the documentation by clicking the `Edit this page` button located at the bottom of any page.

## Edit on GitHub

### 1. Click "Edit this page" button

At the bottom of each page on this documentation site, you’ll find an `Edit this page` button. Click it to begin suggesting changes.

![Contribute 1](/img/getting_started/contribute/contribute_0.jpg)

### 2. Click the "Edit" button

:::warning Login on GitHub
Make sure you're logged into GitHub to see the `Edit` button.
:::

Once you've clicked `Edit this page`, you’ll be taken to the page’s source on GitHub. Click the `Edit` button to proceed.

![Contribute 1](/img/getting_started/contribute/contribute_1.jpg)

### 3. Fork the repository

Click the `Fork this repository` button. This only appears the first time you attempt to edit a page.

![Contribute 2](/img/getting_started/contribute/contribute_2.jpg)

### 4. Make and commit your changes

Edit the content as needed. When you're done, click `Commit changes` to submit.

:::info Docusaurus Markdown
This documentation uses Markdown formatting.\
Read the [Docusaurus Markdown docs](https://docusaurus.io/docs/markdown-features) to learn how to properly style your edits.
:::

![Contribute 3](/img/getting_started/contribute/contribute_3.jpg)

### 5. Describe your changes

Before your edits can be published, they must be reviewed. Provide a clear and concise description of your changes to help the reviewers understand your submission. Then click `Propose changes`.

![Contribute 4](/img/getting_started/contribute/contribute_4.jpg)

### 6. Review and submit a pull request

Double-check your changes, and when everything looks good, click `Create pull request`.

![Contribute 5](/img/getting_started/contribute/contribute_5.jpg)
![Contribute 6](/img/getting_started/contribute/contribute_6.jpg)

### 7. Done 🎉

Thank you for submitting a pull request! 💙

A maintainer will review your contribution and merge it into the documentation.

![Contribute 7](/img/getting_started/contribute/contribute_7.jpg)

## Edit locally

If you prefer, you can run a local version of the docs to preview your changes as you make them.

### 1. Fork the repository

Fork the [documentation repository](https://github.com/gameserverapp/Documentation) on GitHub.

### 2. Clone the fork to your computer

Install GitHub Desktop, then clone your fork locally.

![Run docs locally](/img/other/copy-fork-url.jpg)

In GitHub Desktop, click `Add` > `Clone repository`.

![Run docs locally](/img/other/clone-repo-1.jpg)
![Run docs locally](/img/other/clone-repo-2.jpg)

### 3. Install NVM

Follow the easiest installation method for your OS:

- [NVM for Windows (GitHub)](https://github.com/coreybutler/nvm-windows/releases)
- [FreeCodeCamp installation guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

### 4. Install the correct Node.js version

Once NVM is installed, open a terminal or PowerShell window and run:

```bash
nvm install 20
```
Then activate the version:

```bash
nvm use 20
```
### 5. Install documentation dependencies

Navigate to the folder where you cloned the repository, then run:

```bash
npm install
```

### 6. Run the documentation site locally

Start the site with the following command:

```bash
npm run start
```

This will open the documentation in your browser. If it doesn’t open automatically, visit http://localhost:3000/
