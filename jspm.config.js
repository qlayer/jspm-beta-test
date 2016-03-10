SystemJS.config({
  transpiler: "plugin-typescript",
  meta: {
    "npm:*": {
      "build": false
    }
  },
  map: {
    "application1": "app1"
  },
  bundles: {
    "bundles/application-bundle.js": [
      "application1",
      "app1/test.ts"
    ]
  },
  packages: {
    "application1": {
      "main": "test",
      "defaultExtension": "ts"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "jquery": "npm:jquery@2.2.1",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.2": {
      "map": {
        "typescript": "npm:typescript@1.8.7"
      }
    }
  }
});
