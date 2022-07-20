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
var import_reactivePower = __toModule(require("../reactivePower"));
test("VAR to VAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("VAR").to("VAR")).toBe(1);
});
test("mVAR to mVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("mVAR").to("mVAR")).toBe(1);
});
test("kVAR to kVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("kVAR").to("kVAR")).toBe(1);
});
test("MVAR to MVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("MVAR").to("MVAR")).toBe(1);
});
test("GVAR to GVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("GVAR").to("GVAR")).toBe(1);
});
test("VAR to mVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("VAR").to("mVAR")).toBe(1e3);
});
test("VAR to kVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("VAR").to("kVAR")).toBe(1e-3);
});
test("VAR to MVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("VAR").to("MVAR")).toBe(1e-6);
});
test("VAR to GVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("VAR").to("GVAR")).toBe(1e-9);
});
test("GVAR to mVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("GVAR").to("mVAR")).toBe(1e12);
});
test("MVAR to mVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("MVAR").to("mVAR")).toBe(1e9);
});
test("kVAR to mVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("kVAR").to("mVAR")).toBe(1e6);
});
test("mVAR to kVAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("mVAR").to("kVAR")).toBe(1e-6);
});
test("mVAR to VAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("mVAR").to("VAR")).toBe(1e-3);
});
test("kVAR to VAR", () => {
  const convert = (0, import__.default)({
    reactivePower: import_reactivePower.default
  });
  expect(convert(1).from("kVAR").to("VAR")).toBe(1e3);
});
//# sourceMappingURL=reactivePower.test.js.map
