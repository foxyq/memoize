const futureState = (board, x, y) => {
  let livingNeigh = 0;

  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if (board[i] && board[i][j]) {
        if (board[i][j] === 1) {
          if (!(i === x && j === y)) {
            livingNeigh++;
          }
        }
      }
    }
  }

  if (livingNeigh === 2 && board[x][y] === 1) {
    return 1;
  }

  if (livingNeigh === 3) {
    return 1;
  }

  return 0;
};

const gameOfLife = board => {
  let newBoard = [...Array(board.length)].map(x =>
    Array(board[0].length).fill(6)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newBoard[i][j] = futureState(board, i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = newBoard[i][j];
    }
  }
};

let b = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(b);

console.log(b);
