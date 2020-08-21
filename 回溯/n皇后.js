var backtrack = function (n) {
  // 初始化棋盘
  const result = []
  go()

  // 路径：board 中小于 row 的那些行都已经成功放置了皇后
  // 选择列表：第 row 行的所有列都是放置皇后的选择
  // 结束条件：row 超过 board 的最后一行
  function go(board = [], row = 0) {
    if (row === n) {
      buildResult(board)
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board.push(col)
        go(board, row + 1)
        board.pop()
      }
    }
  }

  function isValid(board, row1, col1) {
    for( let row2 = 0; row2 < row1; row2++) {
      const col2 = board[row2];
      // 检查列是否有皇后互相冲突
      if (col1 === col2) {
        return false;
      }
      // 检查右上方是否有皇后互相冲突
      // 检查左上方是否有皇后互相冲突
      const colDistance = Math.abs(col1 - col2);
      const rowDistance = row1 - row2;
      if (colDistance === rowDistance) {
        return false;
      }
    }
    return true
  }

  function buildResult(board) {
    const boardWithQueens = board.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
    result.push(boardWithQueens)
  }

  return result
};

console.log(backtrack(4))
