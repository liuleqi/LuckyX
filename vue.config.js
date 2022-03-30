module.exports = {
  devServer: {
    port: "8888",
    open: true,
    proxy: {
      '/': {
        target: `http://localhost:3003/`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + '/']: ''
        }
      }
    }
  }
}