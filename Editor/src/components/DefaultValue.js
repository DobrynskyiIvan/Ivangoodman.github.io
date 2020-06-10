module.exports = function () {
  var module = {};

  var defaultObject =
    '{"version":1,"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":""}]}]}';

  module.getDefault = function (value) {
    if (!value) {
      return defaultObject;
    } else {
      if (!this.IsJsonString(value)) {
        return defaultObject;
      }
    }

    return value;
  };

  module.IsJsonString = function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  return module;
};
