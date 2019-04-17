const checkSum9 = row => {
  let set = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };

  row.forEach(val => {
    if (!isNaN(val)) {
      if (set[val]) {
        set[val] = false;
      } else {
        return false;
      }
    }
  });

  set = Object.keys(set).filter(x => set[x]);
  row = row.filter(x => x === '.');

  return set.length === row.length;
};

const flattenBox = box => {
  return box.reduce((prev, curr) => {
    return prev.concat(curr);
  });
};

const isValidSudoku = board => {
  const len = board.length;

  if (len < 9) return false;

  const sliceBox = (startX, endX, startY, endY) => {
    return board.slice(startX, endX).map(x => x.slice(startY, endY));
  };

  // check all rows
  for (let row of board) {
    if (!checkSum9(row)) return false;
  }

  // check all cols
  // let diags = { diag1: [], diag2: [] };

  for (let i = 0; i < len; i++) {
    let column = board.map(x => x[i]);

    if (!checkSum9(column)) return false;

    // diags['diag1'].push(board[i][i]);
    // diags['diag2'].push(board[len - 1 - i][i]);
  }

  // check both diagonals
  // for (diag in diags) {
  //   if (!checkSum9(diags[diag])) return false;
  // }

  const boxBounds = [[0, 3], [3, 6], [6, 9]];
  let flag = true;

  boxBounds.forEach(bound => {
    boxBounds.forEach(bound2 => {
      let box = sliceBox(bound[0], bound[1], bound2[0], bound2[1]);
      box = flattenBox(box);

      if (!checkSum9(box)) flag = false;
    });
  });

  return flag;
};

const board = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];

console.log(isValidSudoku(board));
