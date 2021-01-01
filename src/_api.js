export default function (methods) {
  function methodChainer(wrapper, method) {
    return (d) => {
      method(d);
      return wrapper;
    };
  }

  return Object.keys(methods).reduce((API, methodName) => {
    API[methodName] = methodChainer(API, methods[methodName]);
    return API;
  }, {});
}
