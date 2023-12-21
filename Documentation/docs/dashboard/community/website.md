---
title: Website
sidebar_position: 1
---
Set up a website for online whitelist application forms and more. No coding experience required: it's all easy drag-and-drop.

[Go to Website >](https://dash.gameserverapp.com/community/page)

![Community website example](/img/dashboard/community/website/community_website_example.jpg)

## Pages

[Go to Pages >](https://dash.gameserverapp.com/community/page)

### Create new page

#### 1. Click `+ Add page`
Click `+ Add page` in the __top-right corner__ on the [Website page overview](https://dash.gameserverapp.com/community/page).

![Community - Website - Create page 1](/img/dashboard/community/website/create_page_1.jpg)

#### 2. Add content
Use the Page builder to add various components to the page.

[Learn more about Page builder >](#page-builder)

:::tip page template
Use a page template to help speed up creating new pages.

![Community - Website - Create page 2](/img/dashboard/community/website/create_page_2_1.jpg)
:::

![Community - Website - Create page 2](/img/dashboard/community/website/create_page_2.jpg)

#### 3. Finish settings
Enter a page title and the publishing date. GSA will automatically publish the page when choosing a date in the future.

![Community - Website - Create page 3](/img/dashboard/community/website/create_page_3.jpg)

### Manage pages
Clone or delete pages from the [Page overview](https://dash.gameserverapp.com/community/page). Click the <icon icon="fa-solid fa-eye" size="lg" /> to open the page on the Community website.

![Community - Website - Manage page 3](/img/dashboard/community/website/manage_page_1.jpg)

## Page builder

### Add row
Click `Add row` at the bottom of the Page builder.

![Community - Website - Page builder 1](/img/dashboard/community/website/pagebuilder_1.jpg)

Choose what kind of row to add to the page.

![Community - Website - Page builder 2](/img/dashboard/community/website/pagebuilder_2.jpg)

### Manage rows

![Community - Website - Page builder 6](/img/dashboard/community/website/pagebuilder_6.jpg)

Drag a row up/down to change the order using the <icon icon="fa-solid fa-arrows-alt" size="lg" /> icon or delete a row by clicking <icon icon="fa-solid fa-trash" size="lg" />.

#### Change layout
Click `Layout` to change the layout of a row.

![Community - Website - Page builder 7](/img/dashboard/community/website/pagebuilder_7.jpg)

#### Row settings
Click `Row settings` to make changes to appearance and spacing.

![Community - Website - Page builder 8](/img/dashboard/community/website/pagebuilder_8.jpg)

### Add content block to row
Click `Add content` in the row where you want to add a content block.

![Community - Website - Page builder 3](/img/dashboard/community/website/pagebuilder_3.jpg)

Choose a content block to add to the page.

![Community - Website - Page builder 4](/img/dashboard/community/website/pagebuilder_4.jpg)

### Manage content block
Each content block can have specific extra settings, like text alignment. Delete a content block by clicking <icon icon="fa-solid fa-trash" size="lg" />.

![Community - Website - Page builder 5](/img/dashboard/community/website/pagebuilder_5.jpg)

## Menu
Use the sidebars on the menu page to add items to the menu. Drag menu items up and down to change position.

[Go to Menu >](https://dash.gameserverapp.com/community/menu)

:::tip sub menu
Create a sub menu by dragging menu items to the right.

![Community - Website - Menu 2](/img/dashboard/community/website/menu_2.jpg)
:::

![Community - Website - Menu 1](/img/dashboard/community/website/menu_1.jpg)

## Theme options

[Go to Theme options >](https://dash.gameserverapp.com/community/website/theme-options)

### Logos
Upload custom logos and favicon to be used on the Community website.

![Community - Website - Theme options - logo](/img/dashboard/community/website/theme_options_logo.jpg)

### Website themes & font
Choose from various themes and fonts to customize the Community website.

![Community - Website - Theme options - website theme + font](/img/dashboard/community/website/theme_options_theme_font.jpg)

### Change website background
Select one of the many background banners or enter a link to a custom banner image.

![Community - Website - Theme options - banner](/img/dashboard/community/website/theme_options_banner.jpg)

### Custom CSS
Customize the Community website by uploading custom CSS.

![Community - Website - Theme options - CSS](/img/dashboard/community/website/theme_options_css.jpg)

## Colors
Change the colors on the Community website.

[Go to Colors >](https://dash.gameserverapp.com/community/website/theme-colors)

![Community - Website - Colors](/img/dashboard/community/website/colors.jpg)

## Custom images
Upload custom images for characters on the Community website.

[Go to Custom images >](https://dash.gameserverapp.com/community/website/custom-images)

![Community - Website - Custom images](/img/dashboard/community/website/custom_images.jpg)

## Website domain
Change the subdomain url for the Community website or set a custom domain.

[Go to Domain >](https://dash.gameserverapp.com/community/website/domain)

### 1. Set up CloudFlare
It is currently only possible to set up a custom domain if this domain runs via CloudFlare. CloudFlare helps protect against DDoS attacks and is free.

[Buy a domain from CloudFlare](https://www.cloudflare.com/en-gb/products/registrar/) or [set up CloudFlare for an existing domain](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).

When you can't use CloudFlare we recommend [self-hosting the community website](https://github.com/gameserverapp/Community-Website/wiki/Self%E2%80%90hosted-Cloud-VPS-Community-website). 

### 2. Configure SSL
Navigate to `SSL/TLS` -> `Overview` and make sure `Full` is selected.

![Community - Custom domain - CloudFlare SSL setup](/img/dashboard/community/website/cloudflare_ssl_setup.jpg)

### 3. Set up DNS
Now it is important to determine what the final domain will be, which visitors will type in to reach the website. You can choose between `www.yourdomain.com` or `yourdomain.com`. As you can see, one domain starts with `www` and the other does not.

#### WWW
If your domain should start with `www`, you must set this on CloudFlare as follows. Make sure the settings match the screenshot below exactly.

Enter IP: `159.69.89.22`.

![Community - Custom domain - CloudFlare DNS www](/img/dashboard/community/website/cloudflare_dns_www.jpg)

#### Non-www
If your domain should __not__ start with `www`, then you need to set this on CloudFlare as follows. Make sure the settings match the screenshot below exactly.

Enter IP: `159.69.89.22`.

![Community - Custom domain - CloudFlare DNS non-www](/img/dashboard/community/website/cloudflare_dns_root.jpg)

### 4. Enter Custom Domain on GSA
Depending on your choice in the step above, you now need to enter the domain with or without `www`. If you have set __with__ `www` above, you should do that here too.


![Community - Custom domain - setup at GSA](/img/dashboard/community/website/custom_domain-2.jpg)

## Settings
[Go to Settings >](https://dash.gameserverapp.com/community/website/settings)

### General settings
Set up a custom home page or set the forum as a homepage. Configure a Google Analytics ID and change various pages to a custom page.

![Community - Website - Settings](/img/dashboard/community/website/website_settings.jpg)

### Footer settings
Change the `Footer` content for all pages.

![Community - Website - Footer settings](/img/dashboard/community/website/website_footer_settings.jpg)


## Other

### Connect sub-accounts on Community website
If there is no way for players to log in using, for example, Steam or Epic, they can link their in-game account to another account with which they can log in. This allows players to still use the shop etc.

:::caution Known issues & solutions
- `ARK:SA` Does not work when player (Steam, Epic etc) or character name includes special characters, like `éøö$` and other non-utf8 characters.
- `ARK:SA` Stops working after change your steam username.

Try [renaming the player](/dashboard/admin_tools/general#rename-player) to solve the issue.
:::

#### 1. Request connect code in-game
Type `!getconnectcode` in-game with the account you want to connect to another Steam, Epic etc account.
As a security measure you need to type `!getconnectcode` twice.

![Community - Connect code - step 1](/img/dashboard/community/website/connectcode_1.jpg)

#### 2. Go to Settings page on Community website
Navigate to the Community website and enter the code in the `Connect accounts` sections.

![Community - Connect code - step 2](/img/dashboard/community/website/connectcode_2.jpg)

#### Done!
The in-game player account is now connected to the account logged in on the Community website.

![Community - Connect code - done](/img/dashboard/community/website/connectcode_3.jpg)
