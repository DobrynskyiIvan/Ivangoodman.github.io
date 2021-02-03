const assert = require("assert");
const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

const original = gen.getEl;

gen.getEl = (a, b) => a;

const string = getStr("first", "second");
assert.strictEqual(string, "first");

gen.getEl = original;
