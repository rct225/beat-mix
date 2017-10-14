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

function invert(drumsArrayName) {
  if (!drumsArrayName) {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumsArrayName)) {
    return;
  }

  drumsArray = eval(drumsArrayName);

  for (var i = 0; i < drumsArray.length; i++) {
    drumsArray[i] = !(drumsArray[i]);
  }

}

function getNeighborPads(x, y, size) {
  if (x >= size || y >= size) {
    return [];
  }

  if (x < 0 || y < 0) {
    return [];
  }

  if (x == 0 && y == 0) {
    return [
      [0,1],
      [1,0]
    ];
  }

  if (x == size - 1 && y == size - 1) {
    return [
      [x, y - 1],
      [x - 1, y]
    ];
  }

  if (x == size - 1 && y == 0) {
    return [
      [x, 1],
      [x - 1, 0]
    ];
  }

  if (x == 0 && y == size - 1) {
    return [
      [0, y - 1],
      [1, y]
    ];
  }

  if (x == 0) {
    return [
      [0, y - 1],
      [0, y + 1],
      [1, y]
    ];
  }

  if (x == size - 1) {
    return [
      [x, y - 1],
      [x, y + 1],
      [x - 1, y]
    ];
  }

  if ( y == 0 ) {
    return [
      [x, y + 1],
      [x + 1, y],
      [x - 1, y]
    ];
  }

  if ( y == size - 1) {
    return [
      [x, y - 1],
      [x + 1, y],
      [x - 1, y]
    ];
  }
  
  return [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1]
  ];
}
