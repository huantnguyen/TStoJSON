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
var import_current = __toModule(require("../current"));
test("A to A", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("A").to("A")).toBe(1);
});
test("mA to mA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("mA").to("mA")).toBe(1);
});
test("kA to kA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("kA").to("kA")).toBe(1);
});
test("A to mA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("A").to("mA")).toBe(1e3);
});
test("A to kA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("A").to("kA")).toBe(1e-3);
});
test("kA to mA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("kA").to("mA")).toBe(1e6);
});
test("mA to kA", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("mA").to("kA")).toBe(1e-6);
});
test("mA to A", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("mA").to("A")).toBe(1e-3);
});
test("kA to A", () => {
  const convert = (0, import__.default)({
    current: import_current.default
  });
  expect(convert(1).from("kA").to("A")).toBe(1e3);
});
//# sourceMappingURL=current.test.js.map
