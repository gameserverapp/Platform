// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'GameServerApp Docs',
    tagline: 'Helping game communities get the best tools',
    url: 'https://docs.gameserverapp.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: '/img/logo.png',
    organizationName: 'GameServerApp',
    projectName: 'Platform',

    plugins: [
        'docusaurus-plugin-sass',
        [
            "docusaurus-plugin-openapi",
            {
                id: 'system-api',

                path: './docs/api/openapi.yaml',
                // path: './docs/api/system-api.yaml',
                routeBasePath: '/developers/system-api'
            }
        ],
        [
            "docusaurus-plugin-openapi",
            {
                id: 'community-api',
                path: './docs/api/community-api.yaml',
                routeBasePath: '/developers/community-api'
            }
        ],
        [
            "docusaurus-plugin-openapi",
            {
                id: 'mod-api',
                path: './docs/api/mod-api.yaml',
                routeBasePath: '/developers/mod-api'
            }
        ]
    ],

    presets: [
        [
            'docusaurus-preset-openapi',
            {
                api: false,
                docs: {
                    sidebarPath: 'sidebars.js',
                    editUrl: 'https://github.com/gameserverapp/platform/tree/main/Documentation',
                    routeBasePath: '/',
                    // showLastUpdateTime: true, //not supported by CloudFlare
                    // showLastUpdateAuthor: true //not supported by CloudFlare
                },
                blog: false,
                theme: {
                    customCss: [
                        './src/css/custom.scss'
                    ],
                },
                gtag: {
                    trackingID: 'G-6YHGK18Q02',
                    anonymizeIP: true
                },
            },

        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // announcementBar: {
            //     id: 'announcementBar-3', // Increment on change
            //     content: `We are migrating our documentation to this new site. It is work in progress`,
            // },

            algolia: {
                // The application ID provided by Algolia
                appId: 'KU4Z03NFA1',

                // Public API key: it is safe to commit it
                apiKey: 'fb4254623f3e334ffab789a2798369ee',

                indexName: 'gameserverapp',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                replaceSearchResultPathname: {
                    from: '/docs/', // or as RegExp: /\/docs\//
                    to: '/',
                },

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',

                //... other Algolia params
            },

            navbar: {
                hideOnScroll: true,
                title: 'GameServerApp',
                logo: {
                    alt: 'GSA logo',
                    src: '/img/docs-logo-alt.png',
                    width: 32,
                    height: 32,
                },
                items: [
                    //left
                    {
                        type: 'doc',
                        position: 'left',
                        docId: 'getting_started',
                        label: 'Install & connect',
                    },
                    {
                        type: 'doc',
                        docId: 'dashboard',
                        label: 'Dashboard',
                    },
                    {
                        label: "Developers",
                        position: "left",
                        items: [
                            {
                                to: "/developers/system-api/introduction",
                                label: "System API"
                            },
                            {
                                to: "/developers/community-api",
                                label: "Community API"
                            },
                            {
                                to: "/developers/mod-api",
                                label: "Mod API"
                            },
                        ],
                    },
                    {
                        type: 'search',
                        position: 'left',
                    },

                    //right
                    {
                        href: 'https://www.gameserverapp.com/join-discord',
                        // label: 'Join Discord',
                        position: 'right',
                        className: 'header-discord-link',
                        // className: 'gsa-login',
                    },
                    {
                        href: 'https://dash.gameserverapp.com',
                        label: 'Dashboard',
                        position: 'right',
                    },
                    // {
                    //     href: 'https://www.gameserverapp.com/support/get-in-touch',
                    //     label: 'Get in touch',
                    //     position: 'right',
                    //     // className: 'gsa-login',
                    // },
                    // {
                    //     href: 'https://github.com/gameserverapp/platform',
                    //     position: 'right',
                    //     className: 'header-github-link',
                    //     'aria-label': 'GitHub repository',
                    // },
                    // {
                    //     href: 'https://www.gameserverapp.com/join-discord',
                    //     position: 'right',
                    //     className: 'header-discord-link',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        label: 'GameServerApp.com',
                        href: 'https://www.gameserverapp.com/',
                    },
                    {
                        label: 'Sign in / register',
                        href: 'https://dash.gameserverapp.com/',
                    },
                    {
                        label: 'System status',
                        href: 'https://status.gameserverapp.com/',
                    },
                    {
                        label: 'Release notes',
                        href: 'https://github.com/gameserverapp/Platform/discussions/categories/announcements',
                    },
                    {
                        label: 'Privacy policy',
                        href: 'https://www.gameserverapp.com/company/privacy-policy/',
                    },
                    {
                        label: 'Terms and Conditions',
                        href: 'https://www.gameserverapp.com/company/terms-and-conditions/',
                    },

                ],
                copyright: `Copyright © ${new Date().getFullYear()} GameServerApp.com.`,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            }
        }),
};

module.exports = config;
