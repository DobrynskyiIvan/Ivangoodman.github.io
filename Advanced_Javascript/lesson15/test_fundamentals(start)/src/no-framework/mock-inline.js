const assert = require("assert");
const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

function fn(cb = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return cb(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = newCb => (cb = newCb);
  return mockFn;
}

function spy(ob, meth) {
  const original = ob[meth];
  ob[meth] = fn();
  ob[meth].mockRestore = () => (ob[meth] = original);
}

spy(gen, "getEl");
gen.getEl.mockImplementation((a, b) => a);

const string = getStr("first", "second");
assert.strictEqual(string, "first");

assert.deepStrictEqual(gen.getEl.mock.calls, [
  ["first", "second"],
  ["first", "second"]
]);

gen.getEl.mockRestore();
