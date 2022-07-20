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
var import_pieces = __toModule(require("../pieces"));
test("bk-doz to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("bk-doz").to("pcs")).toBe(13);
});
test("cp to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("cp").to("pcs")).toBe(2);
});
test("doz-doz to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("doz-doz").to("pcs")).toBe(144);
});
test("doz to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("doz").to("pcs")).toBe(12);
});
test("gr-gr to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("gr-gr").to("pcs")).toBe(1728);
});
test("gros to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("gros").to("pcs")).toBe(144);
});
test("half-dozen to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("half-dozen").to("pcs")).toBe(6);
});
test("long-hundred to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("long-hundred").to("pcs")).toBe(120);
});
test("ream to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("ream").to("pcs")).toBe(500);
});
test("scores to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("scores").to("pcs")).toBe(20);
});
test("sm-gr to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("sm-gr").to("pcs")).toBe(120);
});
test("trio to pcs", () => {
  const convert = (0, import__.default)({
    pieces: import_pieces.default
  });
  expect(convert(1).from("trio").to("pcs")).toBe(3);
});
//# sourceMappingURL=pieces.test.js.map
