// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import * as websiteConfig from './website_config.json';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Moondeuk',
  tagline: 'Software Engineer, Developer and Architect',
  url: 'https://moondeuk.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: { label: 'English'},
      ko: { label: 'Korean'}
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${websiteConfig.GITHUB_USER}/${websiteConfig.REPOSITORY_NAME}/tree/main`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${websiteConfig.GITHUB_USER}/${websiteConfig.REPOSITORY_NAME}/tree/main`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: websiteConfig.TRACKING_ID,
          anonymizeIP: websiteConfig.ANONYMIZE_IP
        },
        gtag: {
          trackingID: websiteConfig.TRACKING_ID,
          anonymizeIP: websiteConfig.ANONYMIZE_IP
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'moondeuk.com',
        logo: {
          alt: 'moondeuk.com Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Architecture/Linux/linux-ha-clustering',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://kblog.moondeuk.com',
            label: 'k-blog',
            position: 'left',
            target: '_self'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
              href: `https://github.com/${websiteConfig.GITHUB_USER}/${websiteConfig.REPOSITORY_NAME}`,
              label: 'GitHub',
              position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} moondeuk. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid']
};

module.exports = config;
