System.register("app1/controllers/other-file.ts", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Q;
  return {
    setters: [],
    execute: function() {
      exports_1("Q", Q = {OtherController: 'test'});
    }
  };
});

System.register("app1/controllers/some-other-file.ts", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Q;
  return {
    setters: [],
    execute: function() {
      exports_1("Q", Q = {SomeOtherController: 'test'});
    }
  };
});

System.register("app1/test.ts", ["jquery", "./controllers/other-file", "application1/controllers/some-other-file"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var jquery_1,
      SomeController,
      OtherController;
  var M;
  return {
    setters: [function(jquery_1_1) {
      jquery_1 = jquery_1_1;
    }, function(SomeController_1) {
      SomeController = SomeController_1;
    }, function(OtherController_1) {
      OtherController = OtherController_1;
    }],
    execute: function() {
      document.querySelector('#myid').innerHTML = "<b>the app 1</b>";
      console.log('Application 1', jquery_1.default, SomeController, OtherController);
      exports_1("M", M = {test: 'Exported from app1.'});
    }
  };
});

//# sourceMappingURL=application-bundle.js.map