const target = {
  firstName: "dummyFirstName",
  lastName: "dummyLastName",
};

const handler = {
  get: (obj, prop) => {
    if (prop === "name") {
      return `${obj.firstName} ${obj.lastName}`;
    }
    return prop in obj ? obj[prop] : "Default Value";
  },
};

const proxiedTarget = new Proxy(target, handler);
