/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 == 1) {
    // 奇数直接返回 false，不匹配
    return false;
  }
  const strStack = [];
  const curryMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < s.length; i++) {
    let strItem = s[i];
    let topItem = strStack[strStack.length - 1];
    if (strItem == '(' || strItem == '{' || strItem == '[') {
      strStack.push(strItem);
    } else if (curryMap[strItem] && topItem == curryMap[strItem]) {
      strStack.pop();
    } else {
      return false;
    }
  }
  return strStack.length === 0;
};
