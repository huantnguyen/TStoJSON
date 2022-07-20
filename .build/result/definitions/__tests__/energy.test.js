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
var import_energy = __toModule(require("../energy"));
test("Wh to Wh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("Wh")).toBe(1);
});
test("mWh to mWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("mWh").to("mWh")).toBe(1);
});
test("kWh to kWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("kWh").to("kWh")).toBe(1);
});
test("MWh to MWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MWh").to("MWh")).toBe(1);
});
test("GWh to GWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GWh").to("GWh")).toBe(1);
});
test("J to J", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("J").to("J")).toBe(1);
});
test("kJ to kJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("kJ").to("kJ")).toBe(1);
});
test("MJ to MJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MJ").to("MJ")).toBe(1);
});
test("GJ to GJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GJ").to("GJ")).toBe(1);
});
test("Wh to J", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("J")).toBe(3600);
});
test("Wh to mWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("mWh")).toBe(1e3);
});
test("Wh to kWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("kWh")).toBe(1e-3);
});
test("Wh to MWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("MWh")).toBe(1e-6);
});
test("Wh to GWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("Wh").to("GWh")).toBe(1e-9);
});
test("GWh to mWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GWh").to("mWh")).toBe(1e12);
});
test("GWh to J", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GWh").to("J")).toBe(36e11);
});
test("MWh to mWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MWh").to("mWh")).toBe(1e9);
});
test("kWh to mWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("kWh").to("mWh")).toBe(1e6);
});
test("mWh to kWh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("mWh").to("kWh")).toBe(1e-6);
});
test("mWh to Wh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("mWh").to("Wh")).toBe(1e-3);
});
test("kWh to Wh", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("kWh").to("Wh")).toBe(1e3);
});
test("kWh to kJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("kWh").to("kJ")).toBe(3600);
});
test("MJ to J", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MJ").to("J")).toBe(1e6);
});
test("GJ to J", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GJ").to("J")).toBe(1e9);
});
test("GJ to MJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("GJ").to("MJ")).toBe(1e3);
});
test("MJ to kJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MJ").to("kJ")).toBe(1e3);
});
test("MWh to MJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MWh").to("MJ")).toBe(3600);
});
test("MWh to GJ", () => {
  const convert = (0, import__.default)({
    energy: import_energy.default
  });
  expect(convert(1).from("MWh").to("GJ")).toBe(3.6);
});
//# sourceMappingURL=energy.test.js.map
