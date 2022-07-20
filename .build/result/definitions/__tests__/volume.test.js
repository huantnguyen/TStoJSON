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
var import_volume = __toModule(require("../volume"));
test("l to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("l").to("l")).toBe(2);
});
test("mm3 to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1e6).from("mm3").to("l")).toBe(1);
});
test("cm3 to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(100).from("cm3").to("l")).toBe(1 / 10);
});
test("dl to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("dl").to("l")).toBe(0.2);
});
test("cl to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(25).from("cl").to("l")).toBe(0.25);
});
test("ml to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(100).from("ml").to("l")).toBe(1 / 10);
});
test("m3 to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("m3").to("l")).toBe(1e3);
});
test("km3 to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("km3").to("l")).toBe(1e12);
});
test("l to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("l").to("ml")).toBe(1e3);
});
test("dl to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(10).from("dl").to("ml")).toBe(1e3);
});
test("cl to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(100).from("cl").to("ml")).toBe(1e3);
});
test("ml to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(13).from("ml").to("ml")).toBe(13);
});
test("msk to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("msk").to("ml")).toBe(30);
});
test("tsk to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(3).from("tsk").to("ml")).toBe(15);
});
test("krm to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(13).from("krm").to("ml")).toBe(13);
});
test("kanna to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("kanna").to("l")).toBe(2 * 2.617);
});
test("kkp to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("kkp").to("ml")).toBe(300);
});
test("glas to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("glas").to("ml")).toBe(400);
});
test("ml to msk", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(15).from("ml").to("msk")).toBe(1);
});
test("ml to tsk", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(5).from("ml").to("tsk")).toBe(1);
});
test("ml to krm", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("ml").to("krm")).toBe(1);
});
test("l to kanna", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2.617).from("l").to("kanna")).toBe(1);
});
test("lm to kkp", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(150).from("ml").to("kkp")).toBe(1);
});
test("ml to glas", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(200).from("ml").to("glas")).toBe(1);
});
test("fl-oz to fl-oz", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(62).from("fl-oz").to("fl-oz")).toBe(62);
});
test("fl-oz to tbsp", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(4).from("fl-oz").to("Tbs")).toBe(8);
});
test("Tbs to fl-oz", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("Tbs").to("fl-oz")).toBe(1);
});
test("Tbs to Tbs", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(140).from("Tbs").to("Tbs")).toBe(140);
});
test("tsp to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(355).from("tsp").to("l")).toBeCloseTo(1.74977);
});
test("in3 to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("in3").to("l")).toBeCloseTo(0.0163871);
});
test("in3 to fl-oz", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("in3").to("fl-oz")).toBeCloseTo(0.554113);
});
test("m3 to yd3", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("m3").to("yd3")).toBeCloseTo(1.30795);
});
test("ft3 to cm3", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("ft3").to("cm3")).toBeCloseTo(28316.832);
});
test("pnt to ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(5).from("pnt").to("ml")).toBeCloseTo(2365.88);
});
test("ml to gal", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(9876).from("ml").to("gal")).toBeCloseTo(2.609);
});
test("gal to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(10).from("gal").to("l")).toBeCloseTo(37.85);
});
test("Ml to Ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("Ml").to("Ml")).toBe(1);
});
test("Gl to Gl", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(2).from("Gl").to("Gl")).toBe(2);
});
test("Ml to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("Ml").to("l")).toBe(1e6);
});
test("Gl to l", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("Gl").to("l")).toBe(1e9);
});
test("Gl to Ml", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("Gl").to("Ml")).toBe(1e3);
});
test("Ml to Gl", () => {
  const convert = (0, import__.default)({
    volume: import_volume.default
  });
  expect(convert(1).from("Ml").to("Gl")).toBe(1e-3);
});
//# sourceMappingURL=volume.test.js.map
