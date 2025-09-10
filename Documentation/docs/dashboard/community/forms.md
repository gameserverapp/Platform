---
title: Forms
sidebar_position: 7
---

Let players submit applications, vote on polls, or complete surveys.
Add custom forms to your Community website, no coding required.

[Go to Forms >](https://dash.gameserverapp.com/community/form)

![Community - Forms - Form example](/img/dashboard/community/form/form_example.jpg)

## Create a form

### 1. Click `+ Add form`

Click `+ Add form` in the **top-right corner** on the [Forms overview page](https://dash.gameserverapp.com/community/form).

![Community - Forms - Create form 1](/img/dashboard/community/form/create_form_1.jpg)

Enter a name for your form and select the [form type](#form-types).

![Community - Forms - Create form 2](/img/dashboard/community/form/create_form_2.jpg)

### 2. Add fields

Use the Form builder to add various components and questions to your form.

[Learn more about Form builder >](#form-builder)

:::tip form template
Speed up your process by selecting a form template.
![Community - Website - Create page 2](/img/dashboard/community/form/create_form_3_1.jpg)
:::

![Community - Forms - Create form 3](/img/dashboard/community/form/create_form_3.jpg)

### 3. Form settings

Each form type has unique settings. [Learn more about all form settings >](#form-settings)

Click `Save settings` when you’re done configuring.

![Community - Forms - Create form 4](/img/dashboard/community/form/create_form_4.jpg)

### 4. Add form to page

To publish the form on your Community website, scroll down in the form settings and click `Create new form page`. This generates a new page with the form ready to go.

![Community - Forms - Create form 5](/img/dashboard/community/form/create_form_5.jpg)

Enter a title and any additional information you'd like to display.

![Community - Forms - Create form 6](/img/dashboard/community/form/create_form_6.jpg)

Click publish to make the form live.

![Community - Forms - Create form 7](/img/dashboard/community/form/create_form_7.jpg)

## Manage forms

Edit or delete existing forms from the [Forms overview page](https://dash.gameserverapp.com/community/form).

![Community - Forms - Manage forms](/img/dashboard/community/form/manage_forms.jpg)

## Form builder

The Form builder makes it easy to design forms using a visual drag-and-drop interface.

### Add field

Click `Add field` to insert a new field into the form.

![Community - Forms - Form builder 1](/img/dashboard/community/form/formbuilder_1.jpg)

Choose the type of field you want to add.

![Community - Forms - Form builder 2](/img/dashboard/community/form/formbuilder_2.jpg)

### Manage fields

Reorder fields by dragging them up or down with the <Icon icon="fa-solid fa-arrows-alt" size="lg" /> icon, or delete a field by clicking <Icon icon="fa-solid fa-trash" size="lg" />.

![Community - Forms - Form builder 3](/img/dashboard/community/form/formbuilder_3.jpg)

## Form settings

Adjust the form's name, type, closing date, and more.

### Form types

- **Default** – Use for general purposes like ban appeals or recruitment.
- **Application** – Collect player information for all kinds of applications.
- **Poll** – Let users vote on events, mods, etc.

### Restrictions

Control who can submit the form:

- Allow all players
- Restrict to accounts with characters only

You can also set submission limits:

- 1 submission per account
- Unlimited submissions

![Community - Forms - Form settings - restrictions](/img/dashboard/community/form/settings_restrictions.jpg)

### Players

Require players to link their Discord and/or email before submitting.

By default, banned players can't submit forms. You can override this for special forms, like ban appeals.

![Community - Forms - Form settings - player](/img/dashboard/community/form/settings_player.jpg)

### Discord

Automatically send form activity updates to Discord, this includes new submissions and approvals or rejections.

You can configure specific approval and rejection messages sent by the bot.

![Community - Forms - Form settings - discord](/img/dashboard/community/form/settings_discord.jpg)


[//]: # (todo move to admin tools)
## Applications

[Admin team members](/dashboard/admin_teams) with the right permissions can review applications / submissions.

### Review applications

#### 1. Go to `Unprocessed`

Click the number in the `Unprocessed` column or click the <Icon icon="fa-solid fa-clipboard-check" size="lg" /> icon next to the form you want to review.

![Community - Forms - Review applications 1](/img/dashboard/community/form/review_form_1.jpg)

#### 2. Find application

Use the search feature on the right to locate a specific application. Click `Review` to open it.

![Community - Forms - Review applications 2](/img/dashboard/community/form/review_form_2.jpg)

#### 3. Approve / Reject

Carefully review the form submission and, if needed, add a note for the player. This note will be included in the email response to them.

:::tip Delete application
Use the `Delete` option to remove any invalid or rule-breaking submissions. This also allows the player to try again if [submission restrictions](#restrictions) are in place.
:::

Click `Approve` or `Reject` to complete the review.

![Community - Forms - Review applications 3](/img/dashboard/community/form/review_form_3.jpg)

#### Player email example

Here is what players will see in their email. You can [customize the email messages](#email-messages).

![Community - Forms - Review applications 4](/img/dashboard/community/form/review_form_4.jpg)

### Processed applications

See a complete list of processed applications, who handled them, notes, and final decisions.

![Community - Forms - Processed applications 1](/img/dashboard/community/form/processed_applications_1.jpg)

![Community - Forms - Processed applications 2](/img/dashboard/community/form/processed_applications_2.jpg)

### Email messages

Customize the emails that are sent to players when their applications are approved or rejected.

:::tip
Use the `{note}` variable to insert the admin's note at a specific point in the email.
:::

![Community - Forms - Email settings](/img/dashboard/community/form/email_settings.jpg)