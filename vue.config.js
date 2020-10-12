module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-soundboard/'
    : '/',
  outputDir: 'dist'
}