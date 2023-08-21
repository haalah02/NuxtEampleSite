export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    head: {
    script: [
        {
            src: "https://cdn-cookieyes.com/client_data/78601c4645bf02eaceeeb14c/script.js",
            hid: "cookieyes",
            type: "text/javascript",
          },
    ],
  },
})
