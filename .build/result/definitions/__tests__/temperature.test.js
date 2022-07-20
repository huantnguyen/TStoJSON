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
var import_temperature = __toModule(require("../temperature"));
test("C to K", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(0).from("C").to("K")).toBe(273.15);
});
test("K to C", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(273.15).from("K").to("C")).toBe(0);
});
test("F to C", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(32).from("F").to("C")).toBe(0);
});
test("C to F", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(0).from("C").to("F")).toBe(32);
});
test("F to K", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(32).from("F").to("K")).toBe(273.15);
});
test("F to R", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(100).from("F").to("R")).toBe(559.6700000000001);
});
test("R to F", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(670).from("R").to("F")).toBe(210.32999999999998);
});
test("R to C", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(612).from("R").to("C")).toBe(66.85);
});
test("R to K", () => {
  const convert = (0, import__.default)({
    temperature: import_temperature.default
  });
  expect(convert(459.67).from("R").to("K")).toBe(255.3722222222222);
});
//# sourceMappingURL=temperature.test.js.map
