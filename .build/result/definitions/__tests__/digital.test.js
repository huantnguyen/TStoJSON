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
var import_digital = __toModule(require("../digital"));
test("b to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("b").to("b")).toBe(1);
});
test("Kb to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("Kb").to("b")).toBe(1024);
});
test("Mb to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("Mb").to("b")).toBe(1048576);
});
test("Gb to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("Gb").to("b")).toBe(1073741824);
});
test("Tb to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("Tb").to("b")).toBe(1099511627776);
});
test("B to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("B").to("B")).toBe(1);
});
test("KB to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("KB").to("B")).toBe(1024);
});
test("MB to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("MB").to("B")).toBe(1048576);
});
test("GB to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("GB").to("B")).toBe(1073741824);
});
test("TB to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("TB").to("B")).toBe(1099511627776);
});
test("B to b", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("B").to("b")).toBe(8);
});
test("b to B", () => {
  const convert = (0, import__.default)({
    digital: import_digital.default
  });
  expect(convert(1).from("b").to("B")).toBeCloseTo(0.125);
});
//# sourceMappingURL=digital.test.js.map
