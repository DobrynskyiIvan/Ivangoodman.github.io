const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const asyncSum = (...args) => Promise.resolve(sum(...args));
const asyncSubtract = (...args) => Promise.resolve(subtract(...args));

/* ===== todo =============  */
