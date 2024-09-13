const target = {
  message1: "hello",
  message2: "everyone",
};

const handler = {};

const proxiedTarget = new Proxy(target, handler);
