const target = { age: 25 };
const handler = {
  set: (obj, prop, value) => {
    if (prop === "age" && (typeof value !== "number" || value <= 0)) {
      throw new Error("Age must be a positive number");
    }
    obj[prop] = value;
    return true;
  },
};

const proxiedTarget = new Proxy(target, handler);
