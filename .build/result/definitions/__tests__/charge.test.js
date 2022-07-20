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
var import_charge = __toModule(require("../charge"));
test("Co to Co", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("c").to("c")).toBe(1);
});
test("Co to mC", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("c").to("mC")).toBe(1e3);
});
test("mC to Co", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("mC").to("c")).toBe(1 / 1e3);
});
test("Co to \u03BCC", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("c").to("\u03BCC")).toBe(1e6);
});
test("\u03BCC to Co", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("\u03BCC").to("c")).toBe(1 / 1e6);
});
test("c to nC", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("c").to("nC")).toBeCloseTo(1e9);
});
test("nC to Co", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("nC").to("c")).toBe(1e-9);
});
test("Co to pC", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("c").to("pC")).toBe(1e12);
});
test("pC to Co", () => {
  const convert = (0, import__.default)({
    charge: import_charge.default
  });
  expect(convert(1).from("pC").to("c")).toBe(1e-12);
});
//# sourceMappingURL=charge.test.js.map
