var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  Converter: () => Converter,
  default: () => convert_default
});
class Converter {
  val = 0;
  destination = null;
  origin = null;
  measureData;
  constructor(measures, value) {
    if (typeof value === "number") {
      this.val = value;
    }
    if (typeof measures !== "object") {
      throw new Error("Measures cannot be blank");
    }
    this.measureData = measures;
  }
  from(from) {
    if (this.destination != null)
      throw new Error(".from must be called before .to");
    this.origin = this.getUnit(from);
    if (this.origin == null) {
      this.throwUnsupportedUnitError(from);
    }
    return this;
  }
  to(to) {
    var _a, _b;
    if (this.origin == null)
      throw new Error(".to must be called after .from");
    this.destination = this.getUnit(to);
    if (this.destination == null) {
      this.throwUnsupportedUnitError(to);
    }
    const destination = this.destination;
    const origin = this.origin;
    if (origin.abbr === destination.abbr) {
      return this.val;
    }
    if (destination.measure != origin.measure) {
      throw new Error(`Cannot convert incompatible measures of ${destination.measure} and ${origin.measure}`);
    }
    let result = this.val * origin.unit.to_anchor;
    if (origin.unit.anchor_shift) {
      result -= origin.unit.anchor_shift;
    }
    if (origin.system != destination.system) {
      const measure = this.measureData[origin.measure];
      const anchors = measure.anchors;
      if (anchors == null) {
        throw new Error(`Unable to convert units. Anchors are missing for "${origin.measure}" and "${destination.measure}" measures.`);
      }
      const anchor = anchors[origin.system];
      if (anchor == null) {
        throw new Error(`Unable to find anchor for "${origin.measure}" to "${destination.measure}". Please make sure it is defined.`);
      }
      const transform = (_a = anchor[destination.system]) == null ? void 0 : _a.transform;
      const ratio = (_b = anchor[destination.system]) == null ? void 0 : _b.ratio;
      if (typeof transform === "function") {
        result = transform(result);
      } else if (typeof ratio === "number") {
        result *= ratio;
      } else {
        throw new Error("A system anchor needs to either have a defined ratio number or a transform function.");
      }
    }
    if (destination.unit.anchor_shift) {
      result += destination.unit.anchor_shift;
    }
    return result / destination.unit.to_anchor;
  }
  toBest(options) {
    if (this.origin == null)
      throw new Error(".toBest must be called after .from");
    const isNegative = this.val < 0;
    let exclude = [];
    let cutOffNumber = isNegative ? -1 : 1;
    let system = this.origin.system;
    if (typeof options === "object") {
      exclude = options.exclude ?? [];
      cutOffNumber = options.cutOffNumber ?? cutOffNumber;
      system = options.system ?? this.origin.system;
    }
    let best = null;
    for (const possibility of this.possibilities()) {
      const unit = this.describe(possibility);
      const isIncluded = exclude.indexOf(possibility) === -1;
      if (isIncluded && unit.system === system) {
        const result = this.to(possibility);
        if (isNegative ? result > cutOffNumber : result < cutOffNumber) {
          continue;
        }
        if (best === null || (isNegative ? result <= cutOffNumber && result > best.val : result >= cutOffNumber && result < best.val)) {
          best = {
            val: result,
            unit: possibility,
            singular: unit.singular,
            plural: unit.plural
          };
        }
      }
    }
    return best;
  }
  getUnit(abbr) {
    const found = null;
    for (const [measureName, measure] of Object.entries(this.measureData)) {
      for (const [systemName, system] of Object.entries(measure.systems)) {
        for (const [testAbbr, unit] of Object.entries(system)) {
          if (testAbbr == abbr) {
            return {
              abbr,
              measure: measureName,
              system: systemName,
              unit
            };
          }
        }
      }
    }
    return found;
  }
  describe(abbr) {
    const result = this.getUnit(abbr);
    if (result != null) {
      return this.describeUnit(result);
    }
    this.throwUnsupportedUnitError(abbr);
  }
  describeUnit(unit) {
    return {
      abbr: unit.abbr,
      measure: unit.measure,
      system: unit.system,
      singular: unit.unit.name.singular,
      plural: unit.unit.name.plural
    };
  }
  list(measureName) {
    const list = [];
    if (measureName == null) {
      for (const [name, measure] of Object.entries(this.measureData)) {
        for (const [systemName, units] of Object.entries(measure.systems)) {
          for (const [abbr, unit] of Object.entries(units)) {
            list.push(this.describeUnit({
              abbr,
              measure: name,
              system: systemName,
              unit
            }));
          }
        }
      }
    } else if (!(measureName in this.measureData)) {
      throw new Error(`Meausre "${measureName}" not found.`);
    } else {
      const measure = this.measureData[measureName];
      for (const [systemName, units] of Object.entries(measure.systems)) {
        for (const [abbr, unit] of Object.entries(units)) {
          list.push(this.describeUnit({
            abbr,
            measure: measureName,
            system: systemName,
            unit
          }));
        }
      }
    }
    return list;
  }
  throwUnsupportedUnitError(what) {
    let validUnits = [];
    for (const measure of Object.values(this.measureData)) {
      for (const systems of Object.values(measure.systems)) {
        validUnits = validUnits.concat(Object.keys(systems));
      }
    }
    throw new Error(`Unsupported unit ${what}, use one of: ${validUnits.join(", ")}`);
  }
  possibilities(forMeasure) {
    let possibilities = [];
    let list_measures = [];
    if (typeof forMeasure == "string") {
      list_measures.push(forMeasure);
    } else if (this.origin != null) {
      list_measures.push(this.origin.measure);
    } else {
      list_measures = Object.keys(this.measureData);
    }
    for (const measure of list_measures) {
      const systems = this.measureData[measure].systems;
      for (const system of Object.values(systems)) {
        possibilities = [
          ...possibilities,
          ...Object.keys(system)
        ];
      }
    }
    return possibilities;
  }
  measures() {
    return Object.keys(this.measureData);
  }
}
function convert_default(measures) {
  return (value) => new Converter(measures, value);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Converter
});
//# sourceMappingURL=convert.js.map
