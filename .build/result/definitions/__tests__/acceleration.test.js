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
var import_acceleration = __toModule(require("../acceleration"));
test("g to m/s2", () => {
  const convert = (0, import__.default)({
    acceleration: import_acceleration.default
  });
  expect(convert(1).from("g-force").to("m/s2")).toBe(9.80665);
});
test("m/s2 to g", () => {
  const convert = (0, import__.default)({
    acceleration: import_acceleration.default
  });
  expect(convert(9.80665).from("m/s2").to("g-force")).toBe(1);
});
//# sourceMappingURL=acceleration.test.js.map
