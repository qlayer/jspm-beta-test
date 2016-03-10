var Builder = require('systemjs-builder')
console.log(__dirname)
var builder = new Builder(__dirname);
builder.config({
  paths: {
    "github:*": __dirname + "/jspm_packages/github/*",
    "npm:*": __dirname +"/jspm_packages/npm/*",
    "app1": __dirname +"/app1"
  }
})
Promise.all([
  // builder.loadConfig('jspm.browser.js')
  builder.loadConfig('jspm.config.js')
])
.then(() => {
  // var s = {};
  // var paths = builder.loader.paths;

  // Object.keys(paths)
  //     .filter((key) => paths[key].charAt(0) === '/')
  //     .forEach((key) => {
  //       s[key] = './' + paths[key];
  //     });
  
  // builder.config({ paths:s });
  //builder.loadConfig('jspm.config.js').then(() => {
    console.log(builder.loader);
    
    return builder.bundle('application1', 'bundles/application-bundle.js');
  //});
})
.catch((e) => {
  console.error(e);
});

