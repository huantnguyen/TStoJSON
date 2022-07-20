/*declare var require: any
const tsj = require("ts-to-json");
const fs = require("fs");

const config = {
    path: "./result/temperature.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
    expose: "export",
    jsDoc: "extended",
    topRef: true,
};

const output_path = "new_file";

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(output_path, schemaString, (err: any) => {
    if (err) throw err;
});
*/

const fs = require('fs');


import { Measure, Unit } from './result/index';
export type TemperatureUnits =
  | TemperatureMetricUnits
  | TemperatureImperialUnits;
export type TemperatureSystems = 'metric' | 'imperial';

export type TemperatureMetricUnits = 'C' | 'K';
export type TemperatureImperialUnits = 'F' | 'R';

const metric: Record<TemperatureMetricUnits, Unit> = {
  C: {
    name: {
      singular: 'degree Celsius',
      plural: 'degrees Celsius',
    },
    to_anchor: 1,
    anchor_shift: 0,
  },
  K: {
    name: {
      singular: 'degree Kelvin',
      plural: 'degrees Kelvin',
    },
    to_anchor: 1,
    anchor_shift: 273.15,
  },
};

const imperial: Record<TemperatureImperialUnits, Unit> = {
  F: {
    name: {
      singular: 'degree Fahrenheit',
      plural: 'degrees Fahrenheit',
    },
    to_anchor: 1,
  },
  R: {
    name: {
      singular: 'degree Rankine',
      plural: 'degrees Rankine',
    },
    to_anchor: 1,
    anchor_shift: 459.67,
  },
};

const measure: Measure<TemperatureSystems, TemperatureUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        transform: function (C: number): number {
          return C / (5 / 9) + 32;
        },
      },
    },
    imperial: {
      metric: {
        transform: function (F: number): number {
          return (F - 32) * (5 / 9);
        },
      },
    },
  },
};

export default measure;


// convert JSON object to string
//const data = JSON.stringify(metric, null, 4);
//const data1 = JSON.stringify(imperial, null, 4);
//const data2 = JSON.stringify(measure, null, 4);
//const data3 = data.concat(' ', data1);
//const data4 = data3.concat(' ', data2)
const data = JSON.stringify(measure, null, 4);
console.log(data)
//console.log(data);

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
