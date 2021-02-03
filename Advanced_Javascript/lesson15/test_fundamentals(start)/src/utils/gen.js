function getEl(...rest) {
  const items = [...rest];
  return items[Math.floor(Math.random() * items.length)];
}

module.exports = { getEl };
