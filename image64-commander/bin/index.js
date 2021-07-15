#!/usr/bin/env node


var program = require('commander');
var version = require('../package.json').version;
var base64 = require('../index.js');
program
  .version(version)
  .option('-f, --file <n>', 'file to be converted')
program.parse(process.argv);

base64(program.file, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
