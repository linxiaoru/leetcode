const bt = require('./bt');

const postorder = (root) => {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};
postorder(bt);

// 非递归版本
const postorder2 = (root) => {
  if (!root) {
    return;
  }
  const outpuctStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outpuctStack.push(n);
    if (n.left) {
      stack.push(n.left);
    }
    if (n.right) {
      stack.push(n.right);
    }
  }
  while (outpuctStack.length) {
    const n = outpuctStack.pop();
    console.log(n.val);
  }
};
postorder2(bt);
