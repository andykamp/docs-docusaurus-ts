module.exports = {
  title: "Flat docusourus theme",
  tagline: "Some tagline",
  url: "https://infinum.github.io",
  baseUrl: "/eightshift-docs/",
  favicon: "img/favicon.png",
  organizationName: "infinum",
  projectName: "eightshift-docs",
  staticDirectories: ["static"],
  scripts: [
    {
      src: "https://buttons.github.io/buttons.js",
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "log",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "index",
          label: "Home",
          position: "right",
        },
        {
          to: "docs/welcome",
          activeBasePath: "welcome",
          label: "Docs",
          position: "right",
        },
        {
          to: "/blog",
          activeBasePath: "blog",
          label: "Blog",
          position: "right",
        },
        {
          to: "/storybook/",
          activeBasePath: "storybook",
          label: "Storybook",
          position: "right",
        },
        {
          to: "/pricing",
          activeBasePath: "pricing",
          label: "Pricing",
          position: "right",
        },
        {
          to: "/changelog",
          activeBasePath: "changelog",
          label: "Changelog",
          position: "right",
        },
        {
          to: "/assets",
          activeBasePath: "assets",
          label: "Assets",
          position: "right",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          html: "Try it for free",
          position: "right",
          className: "signup",
        },
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["php"],
    },
    colorMode: {
      disableSwitch: true,
    },
    trailingSlash: false,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/scss/application.scss"),
        },
        blog: {
          // blogTitle: "Some blogtitle",
          // blogDescription: "Some blogdescription",
          blogSidebarTitle: "All our blogs",
          // showReadingTime: true,
          postsPerPage: 200,
          // blogSidebarCount: 0,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  customFields: {
    keywords: [],
  },
};
