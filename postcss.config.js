module.exports = {
  "plugins": [
    require('postcss-smart-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('autoprefixer'),
    require('postcss-reporter')
  ]
};
