const target = {};

const handler = {
  get: (obj, prop) => {
    if (!(prop in obj)) {
      obj[prop] = `Dynamic value for ${prop}`;
    }
    return obj[prop];
  },
};

const proxiedTarget = new Proxy(target, handler);
