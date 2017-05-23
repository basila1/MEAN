var moduleX = require('./mainModule.js') //module1 picks up the main module
moduleX.currentURL = 'http://google.com' //modifies the currentURL property from the mainModule.js
console.log('Current URL ' + moduleX.currentURL);
