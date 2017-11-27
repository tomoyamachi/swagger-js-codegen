var fs = require('fs');
var CodeGen = require('./lib/codegen').CodeGen;

var file = '../swagger-bizshift/bizshift.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
//console.log(reactjsSourceCode);
var source = CodeGen.getCustomCode({
  swagger: swagger,
  lint: false,
  beautify: true,
  template: {
    class: fs.readFileSync('./templates/bizshift-request.mustache', 'utf-8'),
    method: fs.readFileSync('./templates/bizshift-method.mustache', 'utf-8')
  }
});

console.log(source);
