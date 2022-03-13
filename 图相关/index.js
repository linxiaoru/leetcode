/*
 * js 中没有图，但可以使用 Object 和 Array 构建
 *
 * 图的深度优先遍历算法口诀
 *  - 访问根节点。
 *  - 对根节点的没有访问过的相邻节点挨个进行深度优先遍历。
 *
 * 图的广度优先遍历算法口诀
 *  - 新建一个队列，把根节点入队。
 *  - 把队头出队并访问。
 *  - 把队头的没访问过的相邻节点入队。
 *  - 重复第二、第三步，知道队列为空。
 */

const graph = require("./graph");

// 深度优先遍历
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

dfs(2);

// 广度优先遍历
const bfsVisited = new Set();
bfsVisited.add(2);
const q = [2];
while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!bfsVisited.has(c)) {
      q.push(c);
      bfsVisited.add(c);
    }
  });
}
