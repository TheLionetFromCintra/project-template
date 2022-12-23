const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://kviza.ra1z.ru',
        secure: true,
      },
      '^/promo': {
        target: 'https://kviza.ra1z.ru',
        secure: true,
      },
      '^/conf': {
        target: 'https://kviza.ra1z.ru',
        secure: true,
      },
    },
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                @import "@/assets/styles/variables.scss";
            `,
      },
    },
  },
})
