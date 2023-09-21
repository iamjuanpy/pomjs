#!/usr/bin/env node
var pom = require("./pom/template");
var filereader = require("./filemanager/filereader");

pom.test();
filereader.countFiles();
filereader.parseFiles();
