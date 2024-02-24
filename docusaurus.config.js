module.exports = {
  title: 'Arank',
  tagline: 'Arank, a pluggable telegram userbot, made in python using Telethon!',
  url: 'https://www.Arank.tech',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u.png',
  organizationName: 'CoderXKrishna',
  projectName: 'CoderXKrishna.github.io',
  themeConfig: {
    metadatas: [{ name: 'yandex-verification', content: 'b8291c7f76165c9d' }],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    image: 'img/metalogo.jpg',
    navbar: {
      title: 'Arank',
      logo: {
        alt: 'Arank Logo',
        src: 'img/u.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'changelog/',
          activeBasePath: 'changelog/',
          label: 'Changelog',
          position: 'left',
        },
        // { to: 'session-gen', label: 'Session-Gen', position: 'left' },
        {
          href: 'https://github.com/CoderXKrishna/Arank',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'pyArank',
              to: 'docs/pyArank/pyArank',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://telegram.dog/Mr_Mrs_Krishna',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CoderXKrishna',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CoderXKrishna/Arank',
            },
            {
              label: "URL Shortener",
              href: "https://tiny.Arank.tech"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/CoderXKrishna" target="_blank">Team Arank</a>, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DF813CEEN9',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
