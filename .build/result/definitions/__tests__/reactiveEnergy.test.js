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
var import_reactiveEnergy = __toModule(require("../reactiveEnergy"));
test("VARh to VARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("VARh").to("VARh")).toBe(1);
});
test("mVARh to mVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("mVARh").to("mVARh")).toBe(1);
});
test("kVARh to kVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("kVARh").to("kVARh")).toBe(1);
});
test("MVARh to MVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("MVARh").to("MVARh")).toBe(1);
});
test("GVARh to GVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("GVARh").to("GVARh")).toBe(1);
});
test("VARh to mVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("VARh").to("mVARh")).toBe(1e3);
});
test("VARh to kVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("VARh").to("kVARh")).toBe(1e-3);
});
test("VARh to MVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("VARh").to("MVARh")).toBe(1e-6);
});
test("VARh to GVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("VARh").to("GVARh")).toBe(1e-9);
});
test("GVARh to mVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("GVARh").to("mVARh")).toBe(1e12);
});
test("MVARh to mVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("MVARh").to("mVARh")).toBe(1e9);
});
test("kVARh to mVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("kVARh").to("mVARh")).toBe(1e6);
});
test("mVARh to kVARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("mVARh").to("kVARh")).toBe(1e-6);
});
test("mVARh to VARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("mVARh").to("VARh")).toBe(1e-3);
});
test("kVARh to VARh", () => {
  const convert = (0, import__.default)({
    reactiveEnergy: import_reactiveEnergy.default
  });
  expect(convert(1).from("kVARh").to("VARh")).toBe(1e3);
});
//# sourceMappingURL=reactiveEnergy.test.js.map
