const os = require('os');
const githubAccountDefault = os.userInfo().username;

module.exports = {
  helpers: {
    nowYear: function () {
      return new Date().getFullYear();
    },
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<');
      return author.slice(0, startPosition - 1);
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<');
      const endPosition = author.indexOf('>');
      return author.slice(startPosition + 1, endPosition);
    },
    classify: function (str) {
      return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) {
        return c ? c.toUpperCase() : ''
      })
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js plugin'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '0.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: githubAccountDefault
    }
  }
};
