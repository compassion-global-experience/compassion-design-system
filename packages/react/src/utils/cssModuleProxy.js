const moduleProxy = new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return false;
      }
      // Support mocking stuff coming from the default export
      if (key === 'default') {
        return defaultExportProxy;
      }

      return key;
    },
  },
);

const defaultExportProxy = new Proxy(
  {},
  {
    get: function getter(target, key) {
      return key;
    },
  },
);

// eslint-disable-next-line no-undef
module.exports = moduleProxy;
