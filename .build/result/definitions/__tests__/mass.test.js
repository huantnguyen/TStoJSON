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
var import_mass = __toModule(require("../mass"));
test("lb to lb", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("lb").to("lb")).toBe(1);
});
test("lb to oz", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("lb").to("oz")).toBe(16);
});
test("oz to lb", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("oz").to("lb")).toBe(1 / 16);
});
test("oz to oz", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(6).from("oz").to("oz")).toBe(6);
});
test("kg to kg", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("kg").to("kg")).toBe(1);
});
test("kg to g", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("kg").to("g")).toBe(1e3);
});
test("g to kg", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("g").to("kg")).toBe(1 / 1e3);
});
test("g to g", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(100).from("g").to("g")).toBe(100);
});
test("lb to kg", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("lb").to("kg")).toBeCloseTo(0.453592);
});
test("g to lb", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(1).from("g").to("lb")).toBeCloseTo(220462e-8);
});
test("lb to g", () => {
  const convert = (0, import__.default)({
    mass: import_mass.default
  });
  expect(convert(3).from("lb").to("g")).toBeCloseTo(1360.78);
});
//# sourceMappingURL=mass.test.js.map
