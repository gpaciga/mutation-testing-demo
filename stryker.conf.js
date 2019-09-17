module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "javascript",
    coverageAnalysis: "off",
    reporters: ["html", "progress", "clear-text"]
  });
};