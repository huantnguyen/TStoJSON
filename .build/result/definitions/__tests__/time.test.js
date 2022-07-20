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
var import_time = __toModule(require("../time"));
test("s to ns", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(1).from("s").to("ns")).toBeCloseTo(1e9);
});
test("s to mu", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(1).from("s").to("mu")).toBe(1e6);
});
test("s to ms", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(1).from("s").to("ms")).toBe(1e3);
});
test("s to m", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(60).from("s").to("min")).toBe(1);
});
test("s to s", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(1).from("s").to("s")).toBe(1);
});
test("s to h", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(3600).from("s").to("h")).toBe(1);
});
test("s to d", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(86400).from("s").to("d")).toBe(1);
});
test("d to week", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(7).from("d").to("week")).toBe(1);
});
test("d to month", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(30.4375).from("d").to("month")).toBe(1);
});
test("d to year", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(365.25).from("d").to("year")).toBe(1);
});
test("week to month", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(4.34821).from("week").to("month")).toBeCloseTo(1);
});
test("week to year", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(52.17857).from("week").to("year")).toBeCloseTo(1);
});
test("month to year", () => {
  const convert = (0, import__.default)({
    time: import_time.default
  });
  expect(convert(12).from("month").to("year")).toBe(1);
});
//# sourceMappingURL=time.test.js.map
