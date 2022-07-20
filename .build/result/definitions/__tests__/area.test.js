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
var import_area = __toModule(require("../area"));
test("ft2 to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ft2").to("ft2")).toBe(1);
});
test("ft2 to in2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ft2").to("in2")).toBe(144);
});
test("in2 to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("in2").to("ft2")).toBe(1 / 144);
});
test("ft2 to ac", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ft2").to("ac")).toBe(1 / 43560);
});
test("ac to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ac").to("ft2")).toBe(43560);
});
test("ft2 to mi2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ft2").to("mi2")).toBe(1 / 27878400);
});
test("mi2 to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("mi2").to("ft2")).toBe(27878400);
});
test("m2 to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("m2").to("m2")).toBe(1);
});
test("m2 to cm2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("m2").to("cm2")).toBe(1e4);
});
test("cm2 to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("cm2").to("m2")).toBe(1 / 1e4);
});
test("m2 to mm2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("m2").to("mm2")).toBe(1e6);
});
test("ha to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("ha").to("m2")).toBe(1e4);
});
test("km2 to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("km2").to("m2")).toBe(1e6);
});
test("m2 to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("m2").to("ft2")).toBeCloseTo(10.7639);
});
test("mm2 to ft2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("mm2").to("ft2")).toBeCloseTo(107639e-10);
});
test("mm2 to \u03BCm2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("mm2").to("\u03BCm2")).toBe(1e6);
});
test("\u03BCm2 to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("\u03BCm2").to("m2")).toBe(1e-12);
});
test("\u03BCm2 to yd2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("\u03BCm2").to("yd2")).toBeCloseTo(1196e-15);
});
test("mm2 to nm2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("mm2").to("nm2")).toBeCloseTo(1e12);
});
test("nm2 to m2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("nm2").to("m2")).toBe(1e-18);
});
test("nm2 to yd2", () => {
  const convert = (0, import__.default)({
    area: import_area.default
  });
  expect(convert(1).from("nm2").to("yd2")).toBeCloseTo(1196e-21);
});
//# sourceMappingURL=area.test.js.map
