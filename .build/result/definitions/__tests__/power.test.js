var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import__ = __toModule(require("../.."));
var import_power = __toModule(require("../power"));
test("W to W", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("W").to("W")).toBe(1);
});
test("mW to mW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("mW").to("mW")).toBe(1);
});
test("kW to kW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("kW").to("kW")).toBe(1);
});
test("MW to MW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("MW").to("MW")).toBe(1);
});
test("GW to GW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("GW").to("GW")).toBe(1);
});
test("PS to PS", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("PS").to("PS")).toBe(1);
});
test("Btu/s to Btu/s", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("Btu/s").to("Btu/s")).toBe(1);
});
test("ft-lb/s to ft-lb/s", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("ft-lb/s").to("ft-lb/s")).toBe(1);
});
test("hp to hp", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("hp").to("hp")).toBe(1);
});
test("W to mW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("W").to("mW")).toBe(1e3);
});
test("W to kW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("W").to("kW")).toBe(1e-3);
});
test("W to MW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("W").to("MW")).toBe(1e-6);
});
test("W to GW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("W").to("GW")).toBe(1e-9);
});
test("GW to mW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("GW").to("mW")).toBe(1e12);
});
test("MW to mW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("MW").to("mW")).toBe(1e9);
});
test("kW to mW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("kW").to("mW")).toBe(1e6);
});
test("mW to kW", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("mW").to("kW")).toBe(1e-6);
});
test("mW to W", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("mW").to("W")).toBe(1e-3);
});
test("kW to W", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("kW").to("W")).toBe(1e3);
});
test("PS to W", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("PS").to("W")).toBe(735.49875);
});
test("hp to ft-lb/s", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("hp").to("ft-lb/s")).toBe(550);
});
test("Btu/s to ft-lb/s", () => {
  const convert = (0, import__.default)({
    power: import_power.default
  });
  expect(convert(1).from("Btu/s").to("ft-lb/s")).toBe(778.16937);
});
//# sourceMappingURL=power.test.js.map
