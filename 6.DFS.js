
/* 主函数，输入一组不重复的数字，返回它们的全排列 */
var permute = function(letters) {
    let res = [];
    // 记录「路径」[]
    let path = []
    dfs(letters, path, res);
    return res;
}

// 路径：记录在 path 中
// 选择列表：letters 中不存在于 path 的那些元素
// 结束条件：letters 中的元素全都在 path 中出现
function dfs(letters, path,res) {
    // 触发结束条件
    if (path.length === letters.length) {
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // 排除不合法的选择,已使用
        if (path.indexOf(letters[i]) > -1) {continue}
        // 做选择
        path.push(letters[i]);
        // 进入下一层决策树
        dfs(letters, path, res);
        // 取消选择
        path.pop();
    }
}

console.log('[1,2,3]', permute([1,2,3]))
