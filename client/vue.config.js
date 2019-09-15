const path = require('path');

module.exports = {
  devServer: {
    port: 8080,
    proxy: 'http://localhost:4000'
  },
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `@import "@/shared/design/index.scss";`,
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(__dirname, "node_modules/vue-material-design-icons")
      }
    },
    module:{
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        }
      ]
    }
  }
};