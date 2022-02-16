

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'dashboard',
        {
            type: 'category',
            label: 'Admin access',

            collapsed: false,
            items: [
                'dashboard/admin_access/index',
            ],
        },
        {
            type: 'category',
            label: 'Custom roles',

            collapsed: false,
            items: [
                'dashboard/custom_roles/index',
            ],
        },
        {
            type: 'category',
            label: 'Add-ons',

            collapsed: false,
            items: [
                'dashboard/add-ons/index',
            ],
        },
        {
            type: 'category',
            label: 'Notifications',

            collapsed: false,
            items: [
                'dashboard/notifications/index',
            ],
        },
        {
            type: 'category',
            label: 'API',

            collapsed: false,
            items: [
                'dashboard/api/index',
            ],
        },
    ],

    admin_tools: [
        'admin_tools',
        {
            type: 'category',
            label: 'Chat / console',
            collapsed: false,
            items: [
                'admin_tools/chat_console/general',
                'admin_tools/chat_console/filtering',
            ],
        },
        {
            type: 'category',
            label: 'Players',
            collapsed: false,
            items: [
                'admin_tools/players/general',
                'admin_tools/players/mute_player',
                'admin_tools/players/kick_player',
                'admin_tools/players/ban_player',
                'admin_tools/players/custom_roles',
            ],
        },
    ],

    servers: [
        'servers',
        {
            type: 'category',
            label: 'Machines',
            collapsed: false,
            items: [
                'servers/machines/index',
            ],
        },
        {
            type: 'category',
            label: 'Clusters',
            collapsed: false,
            items: [
                'servers/clusters/index',
            ],
        },
        {
            type: 'category',
            label: 'Game servers',
            collapsed: false,
            items: [
                'servers/game_servers/index',
            ],
        },
        {
            type: 'category',
            label: 'Config templates',
            collapsed: false,
            items: [
                'servers/config_templates/index',
            ],
        },
        {
            type: 'category',
            label: 'Integration mod',
            collapsed: false,
            items: [
                'servers/integration_mod/index',
            ],
        },
    ],

    tasks: [
        'tasks',
        {
            type: 'category',
            label: 'Task builder',
            collapsed: false,
            items: [
                'automate_tasks/task_builder/index',
            ],
        },
        {
            type: 'category',
            label: 'Scheduled',
            collapsed: false,
            items: [
                'automate_tasks/scheduled/index',
            ],
        },
        {
            type: 'category',
            label: 'Trigger',
            collapsed: false,
            items: [
                'automate_tasks/trigger/index',
            ],
        },
        {
            type: 'category',
            label: 'History',
            collapsed: false,
            items: [
                'automate_tasks/history/index',
            ],
        },
    ],

    community: [
        'community',
        {
            type: 'category',
            label: 'Website',
            collapsed: false,
            items: [
                'community/website/index',
            ],
        },
        {
            type: 'category',
            label: 'Calendar',
            collapsed: false,
            items: [
                'community/calendar/index',
            ],
        },
        {
            type: 'category',
            label: 'Discord',
            collapsed: false,
            items: [
                'community/discord/index',
            ],
        },
        {
            type: 'category',
            label: 'Reviews',
            collapsed: false,
            items: [
                'community/reviews/index',
            ],
        },
        {
            type: 'category',
            label: 'Vote rewards',
            collapsed: false,
            items: [
                'community/vote_rewards/index',
            ],
        },
        {
            type: 'category',
            label: 'Form builder',
            collapsed: false,
            items: [
                'community/form_builder/index',
            ],
        },
    ],

    monetization: [
        'monetization',
        {
            type: 'category',
            label: 'Supporter Tiers',
            collapsed: false,
            items: [
                'monetization/supporter_tiers/index',
            ],
        },
        {
            type: 'category',
            label: 'Shop packs',
            collapsed: false,
            items: [
                'monetization/shop_packs/index',
            ],
        },
        {
            type: 'category',
            label: 'Deliveries',
            collapsed: false,
            items: [
                'monetization/deliveries/index',
            ],
        },
        {
            type: 'category',
            label: 'Payments',
            collapsed: false,
            items: [
                'monetization/sales/index',
                'monetization/subscriptions/index',
                'monetization/tokens/index',
            ],
        },
    ],
};

module.exports = sidebars;