---
title: Payment Service Providers
sidebar_position: 8
---

Learn how to set up Payment Service Providers (PSP) like PayPal, Stripe, and Patreon with GSA to process payments for your community.

All funds go directly to your PayPal, Stripe, or Patreon account. GSA does not charge any transaction fees.

:::info How does it work?
When a player purchases a Tier, GSA instructs your Payment Service Provider (PSP) to charge the player for the corresponding amount.

Once the payment is completed, GSA verifies its success and delivers the Supporter Tier automatically.

This communication happens behind the scenes using API keys, which you’ll set up in the steps below.
:::

:::warning Keep your API keys safe
GSA staff will **never** ask for your password or API keys. Do not share them with anyone.
:::

## Connect PayPal

### 1. PayPal developers site

Go to [developer.paypal.com](https://developer.paypal.com/) and log in with a valid PayPal account.

### 2. Create REST API apps

Ensure you are in `LIVE` mode.

Click `Apps & Credentials` in the top menu, then click `Create App`.

![Monetization - Payment Service Provider - Set up PayPal 1](/img/dashboard/monetization/psp/setup_paypal_1.jpg)

### 3. Create App

Enter `GSA API` (or a similar name) in the `App Name` field.  
Click `Create App` to proceed.

![Monetization - Payment Service Provider - Set up PayPal 2](/img/dashboard/monetization/psp/setup_paypal_2.jpg)

### 4. Configure API features

Before copying your API keys, scroll to the `Features` section and grant the required permissions.

![Monetization - Payment Service Provider - Set up PayPal 3](/img/dashboard/monetization/psp/setup_paypal_3.jpg)

Enable `Vault` and `Subscriptions`, then click `Save Changes`.

:::caution Only enable `Vault` and `Subscriptions`
For security, only activate these two features.
:::

![Monetization - Payment Service Provider - Set up PayPal 4](/img/dashboard/monetization/psp/setup_paypal_4.jpg)

### 5. Setup webhook

Below the API features section, you can configure webhooks.

:::info
Webhooks are required for subscriptions. Without them, subscriptions won’t function.
:::

#### 5.1 Add webhook

Click `Add Webhook`.

![Monetization - Payment Service Provider - Set up PayPal webhook 1](/img/dashboard/monetization/psp/setup_paypal_webhook_1.jpg)

#### 5.2 Find your GSA webhook URL

Copy your unique [webhook URL from the GSA dashboard](https://dash.gameserverapp.com/monetization/settings/paypal) and paste it into the `Webhook URL` field on the PayPal site.

![Monetization - Payment Service Provider - Set up PayPal webhook 2](/img/dashboard/monetization/psp/setup_paypal_webhook_2.jpg)
![Monetization - Payment Service Provider - Set up PayPal webhook 3](/img/dashboard/monetization/psp/setup_paypal_webhook_3.jpg)

#### 5.3 Activate events

Only check the following events:

- `Payment sale completed` (under `Payments & Payouts`)
- `Billing subscription cancelled` (under `Billing subscription`)
- `Billing subscription expired` (under `Billing subscription`)

Then, save the webhook.

![Monetization - Payment Service Provider - Set up PayPal webhook 4](/img/dashboard/monetization/psp/setup_paypal_webhook_4.jpg)
![Monetization - Payment Service Provider - Set up PayPal webhook 4.1](/img/dashboard/monetization/psp/setup_paypal_webhook_4_1.jpg)

#### 5.4 Confirm

Double-check that only `Payment sale completed` is tracked.

![Monetization - Payment Service Provider - Set up PayPal webhook 5](/img/dashboard/monetization/psp/setup_paypal_webhook_5.jpg)

### 6. Enter API keys on GSA

Copy your `Client ID` and `Secret` from PayPal and paste them into the [GSA PayPal settings page](https://dash.gameserverapp.com/monetization/settings/paypal).

![Monetization - Payment Service Provider - Set up PayPal 5](/img/dashboard/monetization/psp/setup_paypal_5.jpg)

:::success Done!
After saving the PayPal settings form, your PayPal integration is complete.
:::

## Connect Stripe

### 1. Stripe log in

Go to [dashboard.stripe.com](https://dashboard.stripe.com/) and log in with a valid Stripe account.

:::caution Stripe account ready?
Make sure your account has completed [Stripe’s onboarding process](https://dashboard.stripe.com/account/onboarding). Test-mode accounts cannot be connected.
:::

### 2. Click `Create restricted key`

Visit the [API keys page](https://dashboard.stripe.com/account/apikeys) under the Developers section.

Click `Create restricted key`.

![Monetization - Payment Service Provider - Set up Stripe 1](/img/dashboard/monetization/psp/setup_stripe_1.jpg)

### 3. Setup name

Name the key `GameServerApp`.

![Monetization - Payment Service Provider - Set up Stripe 2](/img/dashboard/monetization/psp/setup_stripe_2.jpg)

### 4. Configure permissions

Enable the following:

- All Checkout resources: `Write`
- All Billing resources:
  - Prices: `Write`
  - Subscriptions: `Write`
- All Webhook resources: `Write`

![Monetization - Payment Service Provider - Set up Stripe 3](/img/dashboard/monetization/psp/setup_stripe_3.jpg)
![Monetization - Payment Service Provider - Set up Stripe 4](/img/dashboard/monetization/psp/setup_stripe_4.jpg)
![Monetization - Payment Service Provider - Set up Stripe 5](/img/dashboard/monetization/psp/setup_stripe_5.jpg)

:::caution
Only enable the permissions listed above for optimal security.
:::

Click `Create key` to continue.

![Monetization - Payment Service Provider - Set up Stripe 6](/img/dashboard/monetization/psp/setup_stripe_6.jpg)

### 6. Enter API keys on GSA

Click `Reveal live key` to display your key.

Copy the `Restricted key` and paste it into the [GSA Stripe settings page](https://dash.gameserverapp.com/monetization/settings/stripe).

![Monetization - Payment Service Provider - Set up Stripe 7](/img/dashboard/monetization/psp/setup_stripe_7.jpg)

:::success Done!
After saving the Stripe settings form, your Stripe integration is complete.
:::

## Connect Patreon

### 1. Connect Patreon

Click `Connect your Patreon` on the [GSA Patreon settings page](https://dash.gameserverapp.com/monetization/patreon/settings).

### 2. Grant access

Authorize GSA to access your pledge tiers and subscribers.

After granting access, GSA will begin syncing your Patreon pledges.

![Monetization - Payment Service Provider - Set up Patreon 1](/img/dashboard/monetization/psp/setup_patreon_1.jpg)

### 3. Create Tiers for pledges

Click `Create Supporter Tier` for each Patreon pledge you want to link to GSA.

When someone subscribes or renews a Patreon pledge, the connected Supporter Tier will be executed by GSA.  
If a pledge ends, GSA will automatically remove the corresponding Supporter Tier.  
Changes to pledges are handled automatically.

You can view all active Patreon subscriptions on the [Subscription overview](/dashboard/monetization/getting_started#subscriptions).

![Monetization - Payment Service Provider - Set up Patreon 2](/img/dashboard/monetization/psp/setup_patreon_2.jpg)
