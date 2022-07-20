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
var import_frequency = __toModule(require("../frequency"));
test("Hz to Hz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("Hz").to("Hz")).toBe(1);
});
test("mHz to mHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("mHz").to("mHz")).toBe(1);
});
test("kHz to kHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("kHz").to("kHz")).toBe(1);
});
test("MHz to MHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("MHz").to("MHz")).toBe(1);
});
test("GHz to GHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("GHz").to("GHz")).toBe(1);
});
test("THz to THz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("THz").to("THz")).toBe(1);
});
test("rpm to rpm", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("rpm").to("rpm")).toBe(1);
});
test("deg/s to deg/s", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("deg/s").to("deg/s")).toBe(1);
});
test("rad/s to rad/s", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("rad/s").to("rad/s")).toBe(1);
});
test("rpm to Hz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(60).from("rpm").to("Hz")).toBe(1);
});
test("deg/s to Hz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(360).from("deg/s").to("Hz")).toBe(1);
});
test("rad/s to Hz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(Math.PI).from("rad/s").to("Hz")).toBe(0.5);
});
test("THz to GHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("THz").to("GHz")).toBe(1e3);
});
test("mHz to MHz", () => {
  const convert = (0, import__.default)({
    frequency: import_frequency.default
  });
  expect(convert(1).from("mHz").to("MHz")).toBe(1e-9);
});
//# sourceMappingURL=frequency.test.js.map
