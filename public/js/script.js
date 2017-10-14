// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function toggleDrum(drums, drumIndex) {
  if (!drums) {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drums)) {
    return;
  }

  if (drumIndex < 0 || drumIndex > drums.length - 1) {
    return;
  }

  drumsArray = eval(drums);

  drumsArray[drumIndex] = !(drumsArray[drumIndex])
}
