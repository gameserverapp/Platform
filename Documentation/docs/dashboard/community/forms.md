---
title: Forms
sidebar_position: 7
---
Add application, whitelist, or staff recruit forms to the community website without writing a single line of code.

[Go to Forms >](https://dash.gameserverapp.com/community/form)

![Community - Forms - Form example](/img/dashboard/community/form/form_example.jpg)


## Whitelist applications
[Admin team members](/dashboard/admin_teams) with the right permissions can review applications / submissions.

### Review applications

#### 1. Go to `Unprocessed`
Click the number on the `Unprocessed` column or click the <icon icon="fa-solid fa-clipboard-check" size="lg" /> icon for the form you want to review.

![Community - Forms - Review applications 1](/img/dashboard/community/form/review_form_1.jpg)

#### 2. Find application
Use the search feature on the right to find a specific application and click `Review`.

![Community - Forms - Review applications 2](/img/dashboard/community/form/review_form_2.jpg)

#### 3. Approve / Reject
Review the form entries and (optional) add a note for the player. The note will be shared with the player via email.

:::tip Delete application
Use the `Delete` option to delete any applications that violate rules or are invalid. This allows the player to submit the form again if there are any [submission restrictions](#restrictions).
:::

Click `Approve` or `Reject` to continue. The player is automatically added to the whitelist upon approval.

![Community - Forms - Review applications 3](/img/dashboard/community/form/review_form_3.jpg)

#### Player email example
This example shows what the player will see on the email. You can [customize the email messages](#email-messages).

![Community - Forms - Review applications 4](/img/dashboard/community/form/review_form_4.jpg)

### Processed applications
See all processed applications including who processed it, notes and decision.

![Community - Forms - Processed applications 1](/img/dashboard/community/form/processed_applications_1.jpg)

![Community - Forms - Processed applications 2](/img/dashboard/community/form/processed_applications_2.jpg)


### Email messages
Customize the email messages sent to players when applications are approved / rejected.

:::tip
Use the `{note}` variable to determine where the note is placed in the email.
:::

![Community - Forms - Email settings](/img/dashboard/community/form/email_settings.jpg)

## Create a form

### 1. Click `+ Add form`
Click `+ Add form` in the __top-right corner__ on the [Forms overview page](https://dash.gameserverapp.com/community/form).

![Community - Forms - Create form 1](/img/dashboard/community/form/create_form_1.jpg)

Enter a name and select what [type of form](#form-types) to create.


![Community - Forms - Create form 2](/img/dashboard/community/form/create_form_2.jpg)

### 2. Add fields
Use the Form builder to add various components to the form.

[Learn more about Form builder >](#form-builder)

:::tip form template
Use a form template to help speed up creating new forms.

![Community - Website - Create page 2](/img/dashboard/community/form/create_form_3_1.jpg)
:::

![Community - Forms - Create form 3](/img/dashboard/community/form/create_form_3.jpg)

### 3. Form settings
Each form type has different settings. [Learn more about all form settings >](#form-settings)

Click `Save settings` to store all settings.

![Community - Forms - Create form 4](/img/dashboard/community/form/create_form_4.jpg)


### 4. Add form to page
The easiest way to add a form to the website is by scrolling down on the form settings and clicking `Create new form page`.
This will create a new page on the Community website with the form prepared.

![Community - Forms - Create form 5](/img/dashboard/community/form/create_form_5.jpg)

Enter a title for the new page and add any extra information if needed.

![Community - Forms - Create form 6](/img/dashboard/community/form/create_form_6.jpg)

Publish the page to make the form visible on the Community website.

![Community - Forms - Create form 7](/img/dashboard/community/form/create_form_7.jpg)

## Manage forms
Edit and delete forms from the [Forms overview page](https://dash.gameserverapp.com/community/form).

![Community - Forms - Manage forms](/img/dashboard/community/form/manage_forms.jpg)

## Form builder
Using the Form builder makes it very easy to add fields to a form is super simple.

### Add field
Click `Add field` to add a field to the form.

![Community - Forms - Form builder 1](/img/dashboard/community/form/formbuilder_1.jpg)

Choose what kind of field to add to the form.

![Community - Forms - Form builder 2](/img/dashboard/community/form/formbuilder_2.jpg)

### Manage fields
Drag fields up/down to change the order using the <icon icon="fa-solid fa-arrows-alt" size="lg" /> icon or delete a field by clicking <icon icon="fa-solid fa-trash" size="lg" />.

![Community - Forms - Form builder 3](/img/dashboard/community/form/formbuilder_3.jpg)

## Form settings
Change the form name, type, close date and more. 

### Form types
- Default (Ban appeal, recruitment etc.)
- Whitelist application (Role-play, private servers etc.)
- Poll (Vote for events and mods)

### Restrictions
Restrict form submissions to players:
- Everyone can submit
- Only accounts with characters can submit

You can also limit the number of entries players can submit:
- 1 submission per account
- Unlimited submissions

![Community - Forms - Form settings - restrictions](/img/dashboard/community/form/settings_restrictions.jpg)


### Whitelist
Configure which game server or cluster the submitter should be whitelisted. 

You can require all applications to manually get approved before players are added to the whitelist.

![Community - Forms - Form settings - whitelist](/img/dashboard/community/form/settings_whitelist.jpg)

### Players
Require players to have their Discord and/or email connected to the Community website before they can submit a form.

Banned players are by default blocked from submitting forms. For cases like ban appeal forms is it possible to allow banned accounts to submit a form.

![Community - Forms - Form settings - player](/img/dashboard/community/form/settings_player.jpg)


### Discord
Automatically report new form entries to Discord, including approval/rejection of whitelist applications.

Set up special `Approval` and `Rejected` messages that get posted to Discord by the bot when an admin processes the whitelist applications.

![Community - Forms - Form settings - discord](/img/dashboard/community/form/settings_discord.jpg)
