const sb = require("./sidebar.json");

module.exports = {
  title: 'Guus Eikens',
  description: 'Guus Eikens curriculum vitae',
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
