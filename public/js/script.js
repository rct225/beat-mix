// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function toggleDrum(drumsArrayName, drumArrayIndex) {
  if (!drumsArrayName) {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumsArrayName)) {
    return;
  }

  drumsArray = eval(drumsArrayName);

  if (drumArrayIndex < 0 || drumArrayIndex > drumsArray.length - 1) {
    return;
  }

  drumsArray[drumArrayIndex] = !(drumsArray[drumArrayIndex]);

}

function clear(drumsArrayName) {
  if (!drumsArrayName) {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumsArrayName)) {
    return;
  }

  drumsArray = eval(drumsArrayName);

  drumsArray.fill(false);
  
}
