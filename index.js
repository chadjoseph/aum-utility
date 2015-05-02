export default {
  isArray: function (object) {
    return {}.toString.call(object) === '[object Array]';
  },

  isFunction: function (object) {
    return {}.toString.call(object) === '[object Function]';
  },

  isObject: function (object) {
    return {}.toString.call(object) === '[object Object]';
  },

  isString: function (object) {
    return {}.toString.call(object) === '[object String]';
  }
};

