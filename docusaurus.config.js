// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Praktikum Struktur Data dan Algoritma',
  tagline: 'Website Praktikum Struktur Data dan Algoritma',
  favicon: 'img/Java-Logo.png',

  // Set the production url of your site here
  url: 'https://ifwhy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/praktikum-sda-uns/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ifwhy', // Usually your GitHub org/user name.
  projectName: 'praktikum-sda-uns', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id']
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous'
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Praktikum Struktur Data dan Algoritma',
        // logo: {
        //   alt: 'Logo Java',
        //   src: 'img/Java-Logo.png'
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Materi'
          },
          {
            to: '/docs/tugas/tugas-1',
            label: 'Tugas',
            position: 'left'
          },
          {
            'href': 'https://github.com/ifwhy/praktikum-sda-uns',
            'position': 'right',
            'className': 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Praktikum',
            items: [
              {
                label: 'Materi',
                to: '/docs/materi/intro'
              },
              {
                label: 'Tugas',
                to: '/docs/tugas/tugas-1'
              }
            ]
          },
          {
            title: 'Grup Diskusi',
            items: [
              {
                label: 'Google Classroom',
                href: 'https://classroom.google.com/c/NzU2MzYyNjYwOTk4'
              },
              {
                label: 'WhatsApp Group',
                href: 'https://chat.whatsapp.com/CmaR1HwXZDaLN7F2sZ2bzr'
              }
            ]
          },
          {
            title: 'About',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ifwhy/praktikum-sda-uns'
              }
            ]
          }
        ],
        copyright: `Copyright ©${new Date().getFullYear()} Tim Asisten Praktikum Struktur Data dan Algoritma`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        hashed: true,
        docsRouteBasePath: '/docs',
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'tugas',
        editLocalizedFiles: false,
        blogTitle: 'Blog',
        blogDescription: 'Blog Praktikum Struktur Data dan Algoritma',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'tugas',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/ifwhy/praktikum-sda-uns',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
