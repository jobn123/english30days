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
      }, {
        text: 'Jogging',
        link: 'day3'
      }, {
        text: 'Body Lanugage',
        link: 'day4'
      }, {
        text: 'Sleeping',
        link: 'day5'
      }, {
        text: 'Swimming',
        link: 'day6'
      }, {
        text: 'Dragon Boat Festival',
        link: 'day7'
      }, {
        text: 'The Government of the United States',
        link: 'day8'
      }, {
        text: 'Globalization',
        link: 'day9'
      }, {
        text: 'Resources',
        link: 'day10'
      }, {
        text: 'Caring for the Five Senses',
        link: 'day11'
      }, {
        text: 'How Technology Helps People?',
        link: 'day12'
      }, {
        text: 'The American Way of Marriage',
        link: 'day13'
      }, {
        text: 'How to run a company',
        link: 'day14'
      }, {
        text: 'Importance of communication',
        link: 'day15'
      }]
    }]
  },
  markdown: {
    lineNumbers: true
  }
}