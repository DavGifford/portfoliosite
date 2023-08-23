import { defaultTheme } from 'vuepress'

module.exports = {
    lang: 'en-US',
    title: 'My Portfolio',
    description: 'Static Site Genrator',
    base: '/mtm6407-static-site-giff0065/docs/',
    theme: defaultTheme({
        layout: 'CustomLayout',
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Resume',
            link: '/resume/',
        },
        {
            text: 'Photography',
            link: '/photography/',
        },
        {
            text: 'Web',
            link: '/web/',
        },
        {
            text: 'Graphics',
            link: '/graphics/',
        }
        ],
    }),
}