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
var import_pace = __toModule(require("../pace"));
test("s/m to s/m", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("s/m").to("s/m")).toBe(1);
});
test("s/ft to s/ft", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("s/ft").to("s/ft")).toBe(1);
});
test("min/mi to s/ft", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("min/mi").to("s/ft")).toBe(0.0113636);
});
test("s/m to min/km", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("s/m").to("min/km")).toBeCloseTo(16.6667);
});
test("min/mi to min/km", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("min/mi").to("min/km")).toBeCloseTo(0.621371);
});
test("min/km to min/mi", () => {
  const convert = (0, import__.default)({
    pace: import_pace.default
  });
  expect(convert(1).from("min/km").to("min/mi")).toBeCloseTo(1.60934);
});
//# sourceMappingURL=pace.test.js.map
