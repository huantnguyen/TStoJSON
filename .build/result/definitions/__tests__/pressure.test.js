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
var import_pressure = __toModule(require("../pressure"));
test("Pa to Pa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1).from("Pa").to("Pa")).toBe(1);
});
test("Pa to kPa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(2e3).from("Pa").to("kPa")).toBe(2);
});
test("kPa to Pa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1).from("kPa").to("Pa")).toBe(1e3);
});
test("kPa to hPa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(20).from("kPa").to("hPa")).toBe(200);
});
test("kPa to MPa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(8e3).from("kPa").to("MPa")).toBe(8);
});
test("kPa to bar", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(6e3).from("kPa").to("bar")).toBe(60);
});
test("kPa to torr", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(532).from("kPa").to("torr")).toBeCloseTo(3990.33);
});
test("psi to psi", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(10).from("psi").to("psi")).toBe(10);
});
test("psi to ksi", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1e4).from("psi").to("ksi")).toBe(10);
});
test("Pa to psi", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1e4).from("Pa").to("psi")).toBeCloseTo(1.450377);
});
test("torr to ksi", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(51714.931860168974).from("torr").to("ksi")).toBeCloseTo(1);
});
test("psi to hPa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(10).from("psi").to("hPa")).toBeCloseTo(689.47573);
});
test("psi to inHg", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1).from("psi").to("inHg")).toBeCloseTo(2.03602);
});
test("inHg to psi", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1).from("inHg").to("psi")).toBeCloseTo(0.491154);
});
test("inHg to Pa", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1).from("inHg").to("Pa")).toBeCloseTo(3386.389);
});
test("Pa to inHg", () => {
  const convert = (0, import__.default)({
    pressure: import_pressure.default
  });
  expect(convert(1013.25).from("hPa").to("inHg")).toBeCloseTo(29.92);
});
//# sourceMappingURL=pressure.test.js.map
