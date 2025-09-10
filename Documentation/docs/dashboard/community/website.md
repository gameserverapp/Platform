---
title: Website
sidebar_position: 1
---

Set up a website for online (whitelist) application forms and more. No coding experience required, it's all easy drag-and-drop.

[Go to Website >](https://dash.gameserverapp.com/community/page)

![Community website example](/img/dashboard/community/website/community_website_example.jpg)

## Pages

[Go to Pages >](https://dash.gameserverapp.com/community/page)

### Create new page

#### 1. Click `+ Add page`

Click `+ Add page` in the **top-right corner** of the [Website page overview](https://dash.gameserverapp.com/community/page).

![Community - Website - Create page 1](/img/dashboard/community/website/create_page_1.jpg)

#### 2. Add content

Use the Page builder to add different components to the page.

[Learn more about Page builder >](#page-builder)

:::tip page template
Use a page template to speed up the process of creating new pages.

![Community - Website - Create page 2](/img/dashboard/community/website/create_page_2_1.jpg)
:::

![Community - Website - Create page 2](/img/dashboard/community/website/create_page_2.jpg)

#### 3. Finish settings

Enter a page title and publishing date. GSA will publish the page automatically on a future date if selected.

![Community - Website - Create page 3](/img/dashboard/community/website/create_page_3.jpg)

### Manage pages

Clone or delete pages from the [Page overview](https://dash.gameserverapp.com/community/page). Click the `<Icon icon="fa-solid fa-eye" size="lg" />` to preview the page on the Community website.

![Community - Website - Manage page 3](/img/dashboard/community/website/manage_page_1.jpg)

## Page builder

### Add row

Click `Add row` at the bottom of the Page builder.

![Community - Website - Page builder 1](/img/dashboard/community/website/pagebuilder_1.jpg)

Choose the type of row you want to add.

![Community - Website - Page builder 2](/img/dashboard/community/website/pagebuilder_2.jpg)

### Manage rows

![Community - Website - Page builder 6](/img/dashboard/community/website/pagebuilder_6.jpg)

Use the `<Icon icon="fa-solid fa-arrows-alt" size="lg" />` icon to drag rows up or down to reorder. To remove a row, click `<Icon icon="fa-solid fa-trash" size="lg" />`.

#### Change layout

Click `Layout` to adjust the layout of a row.

![Community - Website - Page builder 7](/img/dashboard/community/website/pagebuilder_7.jpg)

#### Row settings

Click `Row settings` to customize appearance and spacing.

![Community - Website - Page builder 8](/img/dashboard/community/website/pagebuilder_8.jpg)

### Add content block to row

Click `Add content` within the row where you'd like to place a content block.

![Community - Website - Page builder 3](/img/dashboard/community/website/pagebuilder_3.jpg)

Choose a content block from the options provided.

![Community - Website - Page builder 4](/img/dashboard/community/website/pagebuilder_4.jpg)

### Manage content block

Content blocks offer specific settings, such as text alignment. Remove a content block by clicking `<Icon icon="fa-solid fa-trash" size="lg" />`.

![Community - Website - Page builder 5](/img/dashboard/community/website/pagebuilder_5.jpg)

## Menu

Use the sidebars on the menu page to add and rearrange menu items. Drag items to change their order.

[Go to Menu >](https://dash.gameserverapp.com/community/menu)

:::tip sub menu
To create a sub menu, drag items slightly to the right.

![Community - Website - Menu 2](/img/dashboard/community/website/menu_2.jpg)
:::

![Community - Website - Menu 1](/img/dashboard/community/website/menu_1.jpg)

## Theme options

[Go to Theme options >](https://dash.gameserverapp.com/community/website/theme-options)

### Logos

Upload your community's logos and favicon.

![Community - Website - Theme options - logo](/img/dashboard/community/website/theme_options_logo.jpg)

### Website themes & font

Pick from various preset themes and fonts to personalize the website.

![Community - Website - Theme options - website theme + font](/img/dashboard/community/website/theme_options_theme_font.jpg)

### Change website background

Choose a banner background or enter a custom image URL.

![Community - Website - Theme options - banner](/img/dashboard/community/website/theme_options_banner.jpg)

### Custom CSS

Add custom styling by uploading your own CSS.

![Community - Website - Theme options - CSS](/img/dashboard/community/website/theme_options_css.jpg)

## Colors

Adjust the color scheme of your Community website.

[Go to Colors >](https://dash.gameserverapp.com/community/website/theme-colors)

![Community - Website - Colors](/img/dashboard/community/website/colors.jpg)

## Custom images

Upload images for in-game characters to be displayed on the Community website.

[Go to Custom images >](https://dash.gameserverapp.com/community/website/custom-images)

![Community - Website - Custom images](/img/dashboard/community/website/custom_images.jpg)

## Website domain

Change your Community website's subdomain or configure a custom domain.

[Go to Domain >](https://dash.gameserverapp.com/community/website/domain)

### 1. Set up CloudFlare

To use a custom domain, it must run through CloudFlare. This service helps protect against DDoS attacks and is free to use.

[Buy a domain from CloudFlare](https://www.cloudflare.com/en-gb/products/registrar/) or [set up CloudFlare for an existing domain](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).

If CloudFlare isn’t an option, consider [self-hosting the community website](https://github.com/gameserverapp/Community-Website/wiki/Self%E2%80%90hosted-Cloud-VPS-Community-website).

### 2. Configure SSL

In CloudFlare, navigate to `SSL/TLS` > `Overview` and set the SSL mode to `Full`.

![Community - Custom domain - CloudFlare SSL setup](/img/dashboard/community/website/cloudflare_ssl_setup.jpg)

### 3. Set up DNS

Decide whether your domain should start with `www` or not: `www.yourdomain.com` or `yourdomain.com`. As you can see, one domain starts with `www` and the other does not.

#### WWW

If you want `www.yourdomain.com`, configure CloudFlare with the following:

IP: `159.69.89.22`

![Community - Custom domain - CloudFlare DNS www](/img/dashboard/community/website/cloudflare_dns_www.jpg)

#### Non-www

If you prefer `yourdomain.com`, configure CloudFlare as shown:

IP: `159.69.89.22`

![Community - Custom domain - CloudFlare DNS non-www](/img/dashboard/community/website/cloudflare_dns_root.jpg)

### 4. Enter Custom Domain on GSA

Enter your custom domain into the GSA dashboard exactly as chosen above (with or without `www`). If you have set **with** `www` above, you should also do that here.

![Community - Custom domain - setup at GSA](/img/dashboard/community/website/custom_domain-2.jpg)

## Settings

[Go to Settings >](https://dash.gameserverapp.com/community/website/settings)

### General settings

Set a custom homepage, enable forum as homepage, enter a Google Analytics ID, and assign custom pages to various site sections.

![Community - Website - Settings](/img/dashboard/community/website/website_settings.jpg)

### Footer settings

Update the footer content shown across all pages.

![Community - Website - Footer settings](/img/dashboard/community/website/website_footer_settings.jpg)

## Other

### Connect sub-accounts on Community website

If players can’t log in via Steam, Epic, etc., they can link their in-game account to another supported account, allowing access to the shop and other features.

:::caution Known issues & solutions

- `ARK:SA` may not work if a Steam, Epic, or character name contains special (non-UTF8) characters like `éøö$`.
- `ARK:SA` may break after changing your Steam username.
- Reinstalling the mod on PC, Xbox, or PS can fix corrupted installs.

Try [renaming the player](/dashboard/admin_tools/general#rename-player) to resolve issues.
:::

#### 1. Request connect code in-game

Type `!getconnectcode` in-game with the account you want to link. You must enter the command twice for security reasons.

![Community - Connect code - step 1](/img/dashboard/community/website/connectcode_1.jpg)

#### 2. Go to Settings page on Community website

Open the Community website and enter the code in the `Connect accounts` section.

![Community - Connect code - step 2](/img/dashboard/community/website/connectcode_2.jpg)

#### Done!

Your in-game account is now connected to the account currently logged in on the Community website.

![Community - Connect code - done](/img/dashboard/community/website/connectcode_3.jpg)
