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
var import_apparentPower = __toModule(require("../apparentPower"));
test("VA to VA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("VA").to("VA")).toBe(1);
});
test("mVA to mVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("mVA").to("mVA")).toBe(1);
});
test("kVA to kVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("kVA").to("kVA")).toBe(1);
});
test("MVA to MVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("MVA").to("MVA")).toBe(1);
});
test("GVA to GVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("GVA").to("GVA")).toBe(1);
});
test("VA to mVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("VA").to("mVA")).toBe(1e3);
});
test("VA to kVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("VA").to("kVA")).toBe(1e-3);
});
test("VA to MVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("VA").to("MVA")).toBe(1e-6);
});
test("VA to GVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("VA").to("GVA")).toBe(1e-9);
});
test("GVA to mVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("GVA").to("mVA")).toBe(1e12);
});
test("MVA to mVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("MVA").to("mVA")).toBe(1e9);
});
test("kVA to mVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("kVA").to("mVA")).toBe(1e6);
});
test("mVA to kVA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("mVA").to("kVA")).toBe(1e-6);
});
test("mVA to VA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("mVA").to("VA")).toBe(1e-3);
});
test("kVA to VA", () => {
  const convert = (0, import__.default)({
    apparentPower: import_apparentPower.default
  });
  expect(convert(1).from("kVA").to("VA")).toBe(1e3);
});
//# sourceMappingURL=apparentPower.test.js.map
