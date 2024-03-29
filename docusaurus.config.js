// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MirrorX",
  tagline: "Remote control tool for enterprise, teams and individuals.",
  url: "https://mirrorx.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "MirrorX-Desktop",
  projectName: "mirrorx-desktop.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogTitle: "MirrorX Releases",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MirrorX",
        logo: {
          alt: "MirrorX",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "blog", label: "Releases", position: "left" },
          {
            href: "https://github.com/MirrorX-Desktop/MirrorX",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/dmtQhHWhyg",
              },
              {
                label: "Github Discussions",
                href: "https://github.com/MirrorX-Desktop/MirrorX/discussions",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "contact@mirrorx.app",
                href: "mailto:contact@mirrorx.app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MirrorX. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
