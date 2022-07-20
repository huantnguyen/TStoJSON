var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Test_default
});
const fs = require("fs");
const metric = {
  C: {
    name: {
      singular: "degree Celsius",
      plural: "degrees Celsius"
    },
    to_anchor: 1,
    anchor_shift: 0
  },
  K: {
    name: {
      singular: "degree Kelvin",
      plural: "degrees Kelvin"
    },
    to_anchor: 1,
    anchor_shift: 273.15
  }
};
const imperial = {
  F: {
    name: {
      singular: "degree Fahrenheit",
      plural: "degrees Fahrenheit"
    },
    to_anchor: 1
  },
  R: {
    name: {
      singular: "degree Rankine",
      plural: "degrees Rankine"
    },
    to_anchor: 1,
    anchor_shift: 459.67
  }
};
const measure = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      imperial: {
        transform: function(C) {
          return C / (5 / 9) + 32;
        }
      }
    },
    imperial: {
      metric: {
        transform: function(F) {
          return (F - 32) * (5 / 9);
        }
      }
    }
  }
};
var Test_default = measure;
const data = JSON.stringify(imperial, null, 4);
fs.writeFile("user.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
