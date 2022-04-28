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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root == null) {
    return 0;
  }
  var sum = 0;
  var traverse = function (root) {
    if (root == null) {
      return;
    }
    if (root.val < low) {
      traverse(root.right);
    } else if (root.val > high) {
      traverse(root.left);
    } else {
      sum += root.val;
      traverse(root.left);
      traverse(root.right);
    }
  };
  traverse(root);
  return sum;
};
