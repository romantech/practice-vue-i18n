const { name } = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const repoName = name.replace(/^@[^/]+\//, '');
const configuredPublicPath = process.env.VUE_APP_PUBLIC_PATH;

const normalizePublicPath = (value) => {
  if (!value || value === '/') {
    return '/';
  }
  return value.endsWith('/') ? value : `${value}/`;
};

module.exports = {
  publicPath: isProduction
    ? normalizePublicPath(configuredPublicPath || `/${repoName}/`)
    : '/',
};
