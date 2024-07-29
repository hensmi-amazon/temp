/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

const Utils = {};

Utils.stopStream = function(stream) {
   if (!stream) { return; }
   stream.getTracks().forEach(track => {
      track.stop();
   });
};

Utils.log = function(moduleName, text) {
   console.log(moduleName + " ==> " + text);
};

Utils.logWarn = function(moduleName, text) {
   console.warn(moduleName + " ==> " + text);
};

Utils.logError = function(moduleName, text) {
   console.error(moduleName + " ==> " + text);
};

Utils.getRandomNumber = function() {
   return Math.ceil(Date.now() * Math.random());
}

export default Utils;
