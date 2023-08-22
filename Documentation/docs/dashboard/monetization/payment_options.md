---
title: Payment Service Providers
sidebar_position: 8
---
Learn how to set up Payment Service Providers (PSP) like PayPal, Stripe and Patreon with GSA to process payments for your community.

All money goes straight to your PayPal, Stripe or Patreon account. GSA charges no fees for any transaction.

:::info How does it work?
When a player wants to buy a Tier, GSA instructs your Payment Service Provider (PSP) to charge the player for X amount.

When a payment is finished GSA will verify if the payment was successful and deliver the Supporter Tier.

Communication between GSA and the PSPs happen behind the scenes using the API keys you learn to set up below.
:::

:::warning Keep your API keys safe
GSA staff will __never__ ask for your password or API keys. Do not share them with anyone.
:::

## Connect PayPal

### 1. PayPay developers site
Navigate to [developer.paypal.com](https://developer.paypal.com/) and log in. You need to have a valid PayPal account for this.

### 2. Create REST API apps
Scroll down to the REST API apps section and hit `Create App`.

![Monetization - Payment Service Provider - Set up PayPal 1](/img/dashboard/monetization/psp/setup_paypal_1.jpg)

### 3. Enter Application details
Enter `GameServerApp` in the App Name field. Ignore the e-mail address in the Sandbox developer account field, as this is only for testing purposes.

Hit `Create app` to continue.

![Monetization - Payment Service Provider - Set up PayPal 2](/img/dashboard/monetization/psp/setup_paypal_2.jpg)

### 4. Switch to `LIVE`

On `My Apps & Credentials` click `Live`. Then click the new app.

![Monetization - Payment Service Provider - Set up PayPal 3](/img/dashboard/monetization/psp/setup_paypal_3.jpg)

### 5. Configure API permissions
Scroll down to the `Live app settings` section and enable `Accept Payments`. Click `Save` to continue.

:::caution Only enable `Accept Payments`
For security reasons we recommend you only enable `Accept Payments`.
:::

![Monetization - Payment Service Provider - Set up PayPal 4](/img/dashboard/monetization/psp/setup_paypal_4.jpg)

### 6. Enter API keys on GSA
Copy the `Client ID` and `Secret` from PayPal over to the [PayPal settings page at GSA](https://dash.gameserverapp.com/monetization/settings/paypal). 

![Monetization - Payment Service Provider - Set up PayPal 5](/img/dashboard/monetization/psp/setup_paypal_5.jpg)

![Monetization - Payment Service Provider - Set up PayPal 6](/img/dashboard/monetization/psp/setup_paypal_6.jpg)

:::success Done!
After saving the PayPal settings form on the dashboard your PayPal account is successfully configured.
:::

## Connect Stripe


### 1. Stripe log in
Navigate to [dashboard.stripe.com](https://dashboard.stripe.com/) and login. You need to have a valid Stripe account for this.

:::caution Stripe account ready?
Make sure your Stripe account has gone through [all the steps to accept payments](https://dashboard.stripe.com/account/onboarding). You won't be able to connect a Stripe account in test-mode.
:::

### 2. Click `Create restricted key`
Go to the [API keys page](https://dashboard.stripe.com/account/apikeys), under Developers.

Click `Create restricted key` to generate the API key.

![Monetization - Payment Service Provider - Set up Stripe 1](/img/dashboard/monetization/psp/setup_stripe_1.jpg)

### 3. Setup name
Enter "GameServerApp" in the `Key name` field.

![Monetization - Payment Service Provider - Set up Stripe 2](/img/dashboard/monetization/psp/setup_stripe_2.jpg)

### 4. Configure permissions
Enable the following permissions:

- All Checkout resources: `Write`
- All Billing resources:
  - Prices: `Write`
  - Subscriptions `Write`
- All Webhook resources: `Write`

![Monetization - Payment Service Provider - Set up Stripe 3](/img/dashboard/monetization/psp/setup_stripe_3.jpg)
![Monetization - Payment Service Provider - Set up Stripe 4](/img/dashboard/monetization/psp/setup_stripe_4.jpg)
![Monetization - Payment Service Provider - Set up Stripe 5](/img/dashboard/monetization/psp/setup_stripe_5.jpg)

:::caution
For security reasons we recommend you only enable the resources listed in this guide.
:::

Click `Create key` to continue.

![Monetization - Payment Service Provider - Set up Stripe 6](/img/dashboard/monetization/psp/setup_stripe_6.jpg)

### 6. Enter API keys on GSA
Click on `Reveal live key` to show your API key.

Copy the `Restricted key` from Stripe over to the [Stripe settings page at GSA](https://dash.gameserverapp.com/monetization/settings/stripe).

![Monetization - Payment Service Provider - Set up Stripe 7](/img/dashboard/monetization/psp/setup_stripe_7.jpg)

:::success Done!
After saving the Stripe settings form on the dashboard your Stripe account is successfully configured.
:::

## Connect Patreon


### 1. Connect Patreon
Click `Connect your Patreon` on the [Patreon settings page at GSA](https://dash.gameserverapp.com/monetization/patreon/settings).


### 2. Grant access
Grant GSA access to your pledge tiers and subscribers.
After granting access GSA will gather information about your Patreon pledges.

![Monetization - Payment Service Provider - Set up Patreon 1](/img/dashboard/monetization/psp/setup_patreon_1.jpg)

### 3. Create Tiers for pledges
Click `Create Supporter Tier` for each Patreon pledge that you want to use on GSA.

GSA will automatically execute the connected Supporter Tier actions when someone subscribes to a Patreon pledge or renews. 

When a pledge ends GSA will end the Supporter Tier. Pledge changes are automatically handled by GSA.

All active Patreon subscriptions can be found on the [Subscription overview](/dashboard/monetization/getting_started#subscriptions).


![Monetization - Payment Service Provider - Set up Patreon 2](/img/dashboard/monetization/psp/setup_patreon_2.jpg)