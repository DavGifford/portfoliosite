import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
    lang: 'en-US',                      // Language for the site
    title: `David Gifford's Portfolio`, // Title of the site
    description: `David Gifford's Portfolio`, // Description of the site
    theme: defaultTheme ({         
        navbar: [                       // Configuration for the navigation bar links
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
};