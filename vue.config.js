const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8080,
    host: '0.0.0.0',
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
