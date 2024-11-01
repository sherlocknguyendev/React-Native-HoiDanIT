module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// babel: là trình dịch code, giúp code đc ở mọi version (dù code kiểu cũ hay kiểu mới)