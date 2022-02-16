// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'GameServerApp Docs',
    tagline: 'The most innovative Game Community Manager',
    url: 'https://docs.gameserverapp.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/docs-logo-alt.ico',
    organizationName: 'gameserverapp',
    projectName: 'Platform',

    plugins: [
        'docusaurus-plugin-sass',
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/gameserverapp/Platform/tree/main/', //todo update
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/gameserverapp/Platform/tree/main/', //todo update
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            }),

        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({

            autoCollapseSidebarCategories: false,
            // announcementBar: {
            //     id: 'announcementBar-2', // Increment on change
            //     content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a>`,
            // },
            navbar: {
                hideOnScroll: true,
                title: 'GameServerApp',
                logo: {
                    alt: 'GSA logo',
                    src: 'img/docs-logo-alt.png',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        type: 'search',
                        position: 'right',
                    },
                    // {
                    //     label: 'Support',
                    //     position: 'right',
                    //     items: [
                    //         {
                    //             href: 'https://ionicframework.com/support',
                    //             label: 'Help Center',
                    //             target: '_blank',
                    //             rel: null,
                    //         },
                    //         {
                    //             href: 'https://ionic.zendesk.com/',
                    //             label: 'Customer Support',
                    //             target: '_blank',
                    //             rel: null,
                    //         },
                    //         {
                    //             href: 'https://ionicframework.com/advisory',
                    //             label: 'Enterprise Advisory',
                    //             target: '_blank',
                    //             rel: null,
                    //         },
                    //     ],
                    //     className: 'navbar__link--support',
                    // },
                    {
                        href: 'https://dash.gameserverapp.com',
                        label: 'Dashboard',
                        position: 'right',
                        className: 'gsa-login',
                    },
                    {
                        href: 'https://github.com/gameserverapp/platform',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                    {
                        href: 'https://gameserverapp.com/join-discord',
                        position: 'right',
                        className: 'header-discord-link',
                    },
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
                        label: 'Privacy',
                        href: 'https://www.gameserverapp.com/company/privacy-policy/',
                    },
                    {
                        label: 'Terms',
                        href: 'https://www.gameserverapp.com/company/terms-and-conditions/',
                    },

                ],
                copyright: `Copyright © ${new Date().getFullYear()} GameServerApp.com.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
