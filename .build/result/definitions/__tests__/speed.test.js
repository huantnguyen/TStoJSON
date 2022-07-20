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
var import_speed = __toModule(require("../speed"));
test("m/s to m/s", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(1).from("m/s").to("m/s")).toBe(1);
});
test("m/s to km/h", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(1).from("m/s").to("km/h")).toBe(3.6);
});
test("mph to mph", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(6).from("mph").to("mph")).toBe(6);
});
test("mph to knot", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(2).from("mph").to("knot")).toBeCloseTo(1.73795);
});
test("mph to ft/s", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(3).from("mph").to("ft/s")).toBeCloseTo(4.4);
});
test("m/s to knot", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(8).from("m/s").to("knot")).toBeCloseTo(15.5508);
});
test("mph to km/h", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(12).from("mph").to("km/h")).toBeCloseTo(19.3121);
});
test("ft/s to ft/min", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(1).from("ft/s").to("ft/min")).toBeCloseTo(60);
});
test("m/s to ft/min", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(1).from("m/s").to("ft/min")).toBeCloseTo(196.85);
});
test("in/s to mm/s", () => {
  const convert = (0, import__.default)({
    speed: import_speed.default
  });
  expect(convert(1).from("in/h").to("mm/h")).toBeCloseTo(25.4);
});
//# sourceMappingURL=speed.test.js.map
