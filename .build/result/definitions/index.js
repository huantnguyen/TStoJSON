var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  acceleration: () => import_acceleration.default,
  angle: () => import_angle.default,
  apparentPower: () => import_apparentPower.default,
  area: () => import_area.default,
  charge: () => import_charge.default,
  current: () => import_current.default,
  default: () => definitions_default,
  digital: () => import_digital.default,
  each: () => import_each.default,
  energy: () => import_energy.default,
  force: () => import_force.default,
  frequency: () => import_frequency.default,
  illuminance: () => import_illuminance.default,
  length: () => import_length.default,
  mass: () => import_mass.default,
  pace: () => import_pace.default,
  partsPer: () => import_partsPer.default,
  pieces: () => import_pieces.default,
  power: () => import_power.default,
  pressure: () => import_pressure.default,
  reactiveEnergy: () => import_reactiveEnergy.default,
  reactivePower: () => import_reactivePower.default,
  speed: () => import_speed.default,
  temperature: () => import_temperature.default,
  time: () => import_time.default,
  voltage: () => import_voltage.default,
  volume: () => import_volume.default,
  volumeFlowRate: () => import_volumeFlowRate.default
});
var import_acceleration = __toModule(require("./acceleration"));
var import_angle = __toModule(require("./angle"));
var import_apparentPower = __toModule(require("./apparentPower"));
var import_area = __toModule(require("./area"));
var import_charge = __toModule(require("./charge"));
var import_current = __toModule(require("./current"));
var import_digital = __toModule(require("./digital"));
var import_each = __toModule(require("./each"));
var import_energy = __toModule(require("./energy"));
var import_force = __toModule(require("./force"));
var import_frequency = __toModule(require("./frequency"));
var import_illuminance = __toModule(require("./illuminance"));
var import_length = __toModule(require("./length"));
var import_mass = __toModule(require("./mass"));
var import_pace = __toModule(require("./pace"));
var import_partsPer = __toModule(require("./partsPer"));
var import_pieces = __toModule(require("./pieces"));
var import_power = __toModule(require("./power"));
var import_pressure = __toModule(require("./pressure"));
var import_reactiveEnergy = __toModule(require("./reactiveEnergy"));
var import_reactivePower = __toModule(require("./reactivePower"));
var import_speed = __toModule(require("./speed"));
var import_temperature = __toModule(require("./temperature"));
var import_time = __toModule(require("./time"));
var import_voltage = __toModule(require("./voltage"));
var import_volume = __toModule(require("./volume"));
var import_volumeFlowRate = __toModule(require("./volumeFlowRate"));
const allMeasures = {
  acceleration: import_acceleration.default,
  angle: import_angle.default,
  apparentPower: import_apparentPower.default,
  area: import_area.default,
  charge: import_charge.default,
  current: import_current.default,
  digital: import_digital.default,
  each: import_each.default,
  energy: import_energy.default,
  force: import_force.default,
  frequency: import_frequency.default,
  illuminance: import_illuminance.default,
  length: import_length.default,
  mass: import_mass.default,
  pace: import_pace.default,
  partsPer: import_partsPer.default,
  pieces: import_pieces.default,
  power: import_power.default,
  pressure: import_pressure.default,
  reactiveEnergy: import_reactiveEnergy.default,
  reactivePower: import_reactivePower.default,
  speed: import_speed.default,
  temperature: import_temperature.default,
  time: import_time.default,
  voltage: import_voltage.default,
  volume: import_volume.default,
  volumeFlowRate: import_volumeFlowRate.default
};
var definitions_default = allMeasures;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  each,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate
});
//# sourceMappingURL=index.js.map
