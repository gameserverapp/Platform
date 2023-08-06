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
    onBrokenMarkdownLinks: 'warn',
    favicon: '/img/docs-logo-alt.ico',
    organizationName: 'GameServerApp',
    projectName: 'Platform',

    plugins: [
        'docusaurus-plugin-sass',
        // [
        //     '@docusaurus/plugin-content-docs',
        //     ({
        //         id: 'admin_tools',
        //         path: 'docs/admin_tools',
        //         routeBasePath: '/admin_tools',
        //         editUrl: ({locale, versionDocsDirPath, docPath}) => {
        //             return `https://github.com/gameserverapp/Platform/edit/main/documentation/admin_tools/${docPath}`;
        //         },
        //         editCurrentVersion: true,
        //         sidebarPath: require.resolve('./sidebars.js'),
        //         showLastUpdateAuthor: false,
        //         showLastUpdateTime: false,
        //     }),
        // ],

    ],

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: 'sidebars.js',
                    editUrl: 'https://github.com/gameserverapp/platform/tree/main/Documentation',
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },

        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // announcementBar: {
            //     id: 'announcementBar-2', // Increment on change
            //     content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a>`,
            // },

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
                        docId: 'introduction',
                        label: 'Getting started',
                    },
                    {
                        type: 'doc',
                        docId: 'dashboard',
                        label: 'Dashboard',
                    },
                    // {
                    //     type: 'doc',
                    //     docId: 'community_website',
                    //     label: 'Community website',
                    // },
                    // {
                    //     type: 'doc',
                    //     position: 'left',
                    //     docId: 'developers',
                    //     label: 'Developers',
                    // },

                    //right
                    // {
                    //     type: 'search',
                    //     position: 'right',
                    // },
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
                        label: 'Dashboard',
                        href: 'https://dash.gameserverapp.com/',
                    },
                    {
                        label: 'System status',
                        href: 'https://status.gameserverapp.com/',
                    },
                    {
                        label: 'Changelog',
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

            // prism: {
            //     darkTheme: darkCodeTheme,
            //     theme: lightCodeTheme,
            // },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            }
        }),
};

module.exports = config;
