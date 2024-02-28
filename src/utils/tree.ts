export type TreeNode = {
  length: number;
  string?: string;
  left: TreeNode | null;
  right: TreeNode | null;
};

export const iterateTree = (tree: TreeNode, func: (node: TreeNode) => void) => {
  if (!tree) return;
  func(tree);
  if (tree.left) iterateTree(tree.left, func);
  if (tree.right) iterateTree(tree.right, func);
};
