module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: {
      'postcss-discard-unused': false,
    },
  },
};