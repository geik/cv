const sb = require("./sidebar.json");

module.exports = {
  title: 'VuePress demo',
  description: 'Just playing around',
  base: "/guus/",
  plugins: [
    'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 1,
    nav: [
      {
        text: 'Home',
        link: '/'
      }
    ],
    sidebar: {
      '/': sb
    }
  }
}
