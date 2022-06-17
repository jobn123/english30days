export default {
  base: '/english30days/',
  title: 'english 30 days',
  description: 'english 30 days',
  themeConfig: {
    nav: [{
      text: 'Guide',
      link: '/index'
    }, {
      text: 'Github',
      link: 'https://github.com/...'
    }],
    sidebar: [{
      text: 'Passages',
      collapsible: true,
      items: [{
        text: 'Success in Life',
        link: 'day1'
      }, {
        text: 'Learning: a Lifelong career',
        link: 'day2'
      }, ]
    }]
  },
  markdown: {
    lineNumbers: true
  }
}