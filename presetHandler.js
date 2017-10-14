// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, presetsIndex, newPresetArray) => {
  if (presetsIndex < 0 || presetsIndex > presets.length - 1) {
    return [404]
  }
  if (method == 'GET') {
    return [200].concat([presets[presetsIndex]]);
  } else if (method == 'PUT') {
    presets[presetsIndex] = newPresetArray;
    return [200].concat([presets[presetsIndex]]);
  } else {
    return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
