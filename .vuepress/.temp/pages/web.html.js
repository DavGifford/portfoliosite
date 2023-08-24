export const data = JSON.parse("{\"key\":\"v-adc35804\",\"path\":\"/web.html\",\"title\":\"Web\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Web\"},\"headers\":[{\"level\":2,\"title\":\"Site Development\",\"slug\":\"site-development\",\"link\":\"#site-development\",\"children\":[{\"level\":3,\"title\":\"What I did on the project:\",\"slug\":\"what-i-did-on-the-project\",\"link\":\"#what-i-did-on-the-project\",\"children\":[]}]},{\"level\":2,\"title\":\"Static Site\",\"slug\":\"static-site\",\"link\":\"#static-site\",\"children\":[]}],\"git\":{\"updatedTime\":1691197383000,\"contributors\":[{\"name\":\"David Gifford\",\"email\":\"giff0065@algonquinlive.com\",\"commits\":2}]},\"filePathRelative\":\"web.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
