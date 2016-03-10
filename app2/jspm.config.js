SystemJS.config({
  map: {
    "application2": "app2"
  },
  packages: {
    "application2": {
      "defaultExtension": "ts",
      "main": "main"
      // "format": "esm"
    }
  }
});
