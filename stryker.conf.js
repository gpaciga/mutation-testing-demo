module.exports = function(config) {
  config.set({
    files: [
      "test/*.js",
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      }
    ],
    testRunner: "jest",
    mutator: "javascript",
    coverageAnalysis: "off",
    reporter: ["html", "progress", "clear-text"]
  });
};