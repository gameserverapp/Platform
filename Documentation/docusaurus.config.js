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
        require.resolve("@cmfcmf/docusaurus-search-local")
    ],

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: 'sidebars.js',
                    editUrl: 'https://github.com/gameserverapp/platform/tree/main/Documentation',
                    routeBasePath: '/',
                    // showLastUpdateTime: true, //not supported by CloudFlare
                    // showLastUpdateAuthor: true //not supported by CloudFlare
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
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
            announcementBar: {
                id: 'announcementBar-3', // Increment on change
                content: `We are migrating our documentation to this new site. It is work in progress`,
            },

            // algolia: {
            //     // The application ID provided by Algolia
            //     appId: 'YOUR_APP_ID',
            //
            //     // Public API key: it is safe to commit it
            //     apiKey: 'YOUR_SEARCH_API_KEY',
            //
            //     indexName: 'YOUR_INDEX_NAME',
            //
            //     // Optional: see doc section below
            //     contextualSearch: true,
            //
            //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //     // externalUrlRegex: 'external\\.com|domain\\.com',
            //
            //     // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //     replaceSearchResultPathname: {
            //         from: '/docs/', // or as RegExp: /\/docs\//
            //         to: '/',
            //     },
            //
            //     // Optional: Algolia search parameters
            //     searchParameters: {},
            //
            //     // Optional: path for search page that enabled by default (`false` to disable it)
            //     searchPagePath: 'search',
            //
            //     //... other Algolia params
            // },

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
                        type: 'doc',
                        position: 'left',
                        docId: 'developers',
                        label: 'Developers',
                    },

                    //right
                    // {
                    //     type: 'search',
                    //     position: 'right',
                    // },
                    {
                        href: 'https://www.gameserverapp.com/',
                        label: 'Visit website',
                        position: 'right',
                        // className: 'gsa-login',
                    },
                    {
                        href: 'https://dash.gameserverapp.com',
                        label: 'Login',
                        position: 'right',
                        className: 'gsa-login',
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
