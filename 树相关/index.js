// 使用 Object 和 Array 构建树

/*
 * 树的深度与广度优先遍历
 *
 * 深度优先遍历：尽可能深地搜索树的分支。
 * 广度优先遍历：先访问离根接点最近的节点。（按层遍历）
 *
 * 深度优先遍历算法口诀：
 *  - 访问根节点。
 *  - 对根节点的 children 挨个进行深度优先遍历。
 *
 * 广度优先遍历算法口诀：
 *  - 新建一个队列，把根节点入队。
 *  - 把队头出队并访问。
 *  - 把队头的 children 挨个入队。
 *  - 重复第二、第三步，直到队列为空。
 *
 */

const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
};

// dfs(深度优先遍历)
const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

dfs(tree);

// bfs(广度优先遍历)
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);
