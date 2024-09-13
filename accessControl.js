const target = {
  secret: "This is a secret",
  public: "This is public",
};

const handler = {
  get: (obj, prop) => {
    if (prop === "secret") {
      throw new Error("Access to secret property is denied");
    }
    return obj[prop];
  },
};

const proxiedTarget = new Proxy(target, handler);
