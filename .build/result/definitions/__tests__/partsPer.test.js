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
var import_partsPer = __toModule(require("../partsPer"));
test("ppm to ppm", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppm").to("ppm")).toBe(1);
});
test("ppb to ppb", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppb").to("ppb")).toBe(1);
});
test("ppm to ppb", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppm").to("ppb")).toBe(1e3);
});
test("ppb to ppm", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppb").to("ppm")).toBe(1e-3);
});
test("ppt to ppt", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppt").to("ppt")).toBe(1);
});
test("ppm to ppt", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppm").to("ppt")).toBe(1e6);
});
test("ppt to ppb", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppt").to("ppb")).toBe(1e-3);
});
test("ppt to ppm", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppt").to("ppm")).toBe(1e-6);
});
test("ppq to ppq", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppq").to("ppq")).toBe(1);
});
test("ppq to ppt", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppq").to("ppt")).toBe(1e-3);
});
test("ppq to ppm", () => {
  const convert = (0, import__.default)({
    partsPer: import_partsPer.default
  });
  expect(convert(1).from("ppq").to("ppm")).toBe(1e-9);
});
//# sourceMappingURL=partsPer.test.js.map
