const _ = require("lodash");

function adpter(list, map, res) {
  if (typeof list === "object") {
    if (Array.isArray(list)) {
      for (let i of list) {
        res.push(adpter(i, map, {}));
      }
    } else {
      for (let i in list) {
        res[map[i]] = list[i];
      }
    }
  }
  return res;
}

module.exports = adpter;
