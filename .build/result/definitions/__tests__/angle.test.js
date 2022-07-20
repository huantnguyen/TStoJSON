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
var import_angle = __toModule(require("../angle"));
test("rad to rad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1).from("rad").to("rad")).toBe(1);
});
test("deg to deg", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1).from("deg").to("deg")).toBe(1);
});
test("grad to grad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1).from("grad").to("grad")).toBe(1);
});
test("arcmin to arcmin", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1).from("arcmin").to("arcmin")).toBe(1);
});
test("arcsec to arcsec", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1).from("arcsec").to("arcsec")).toBe(1);
});
test("deg to rad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(360).from("deg").to("rad")).toBeCloseTo(6.28319);
});
test("deg to grad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(360).from("deg").to("grad")).toBe(400);
});
test("deg to arcmin", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(360).from("deg").to("arcmin")).toBe(21600);
});
test("deg to arcsec", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(360).from("deg").to("arcsec")).toBe(1296e3);
});
test("rad to grad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(10).from("rad").to("grad")).toBeCloseTo(636.62);
});
test("rad to arcsec", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(10).from("rad").to("arcsec")).toBeCloseTo(206264806e-2);
});
test("grad to arcmin", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(5).from("grad").to("arcmin")).toBe(270);
});
test("grad to deg", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(5).from("grad").to("deg")).toBe(4.5);
});
test("arcmin to rad", () => {
  const convert = (0, import__.default)({
    angle: import_angle.default
  });
  expect(convert(1e4).from("arcmin").to("rad")).toBeCloseTo(2.908882);
});
//# sourceMappingURL=angle.test.js.map
