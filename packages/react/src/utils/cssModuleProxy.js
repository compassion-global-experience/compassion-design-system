const moduleProxy = new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return false;
      }

      return key;
    },
  },
);

// eslint-disable-next-line no-undef
module.exports = moduleProxy;
