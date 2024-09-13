const target = {
  message: "hello world!",
};

const handler = {
  get: (obj, prop) => {
    console.log(`getting property ${prop}`);
    return obj[prop];
  },
  set: (obj, prop, value) => {
    console.log(`setting property ${prop} to ${value}`);
    obj[prop] = value;
    return true;
  },
};

const proxiedTarget = new Proxy(target, handler);
