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
var import_length = __toModule(require("../length"));
test("ft to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("ft").to("ft")).toBe(1);
});
test("ft to ft-us", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("ft").to("ft-us")).toBe(0.999998000004);
});
test("ft-us to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("ft-us").to("ft")).toBe(1.000002);
});
test("in to in", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(7).from("in").to("in")).toBe(7);
});
test("ft to in", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("ft").to("in")).toBe(12);
});
test("in to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("in").to("ft")).toBe(1 / 12);
});
test("ft to mi", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("ft").to("mi")).toBe(1 / 5280);
});
test("mi to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("mi").to("ft")).toBe(5280);
});
test("nMi to mi", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("nMi").to("mi")).toBe(1.150780303030303);
});
test("m to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("m")).toBe(1);
});
test("m to cm", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("cm")).toBe(100);
});
test("cm to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("cm").to("m")).toBe(0.01);
});
test("m to mm", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("mm")).toBe(1e3);
});
test("km to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("km").to("m")).toBe(1e3);
});
test("m to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("ft")).toBeCloseTo(3.28084);
});
test("m to ft-us", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("ft-us")).toBeCloseTo(3.28084);
});
test("mm to ft", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("mm").to("ft")).toBeCloseTo(328084e-8);
});
test("nMi to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("nMi").to("m")).toBeCloseTo(1852);
});
test("km to nMi", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("km").to("nMi")).toBeCloseTo(0.539956803);
});
test("fathom to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("fathom").to("m")).toBeCloseTo(1.8288);
});
test("nm to nm", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("nm").to("nm")).toBe(1);
});
test("nm to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("nm").to("m")).toBe(1e-9);
});
test("\u03BCm to \u03BCm", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("\u03BCm").to("\u03BCm")).toBe(1);
});
test("\u03BCm to m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("\u03BCm").to("m")).toBe(1e-6);
});
test("m to \xB5m", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("\u03BCm")).toEqual(1e6);
});
test("m to nm", () => {
  const convert = (0, import__.default)({
    length: import_length.default
  });
  expect(convert(1).from("m").to("nm")).toBeCloseTo(1e9);
});
//# sourceMappingURL=length.test.js.map
