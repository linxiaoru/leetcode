/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归版本
var inorderTraversal = function (root) {
  const result = [];
  const iteration = (n) => {
    if (!n) {
      return [];
    }
    if (n.left) {
      iteration(n.left);
    }
    result.push(n.val);
    if (n.right) {
      iteration(n.right);
    }
  };
  iteration(root);
  return result;
};

// 迭代版本
var inorderTraversal2 = function (root) {
  const result = [];
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }

    const n = stack.pop();
    result.push(n.val);
    p = n.right;
  }

  return result;
};
