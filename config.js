module.exports = {
    lang: 'en-US',
    title: `David Gifford's Portfolio`,
    description: `David Gifford's Portfolio`,
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