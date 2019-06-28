var uniquePathsWithObstacles = function(obstacleGrid) {
  const cols = obstacleGrid[0].length;

  const paths = Array(cols).fill(0);
  paths[0] = 1;

  obstacleGrid.forEach((row, ri) => {
    row.forEach((element, colIndex) => {
      if (element == 1) {
        paths[colIndex] = 0;
      } else if (colIndex > 0) {
        paths[colIndex] = paths[colIndex] + paths[colIndex - 1];
      }
    });
  });

  return paths[cols - 1];
};

console.log(
  uniquePathsWithObstacles([[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]])
);
