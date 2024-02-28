export type TreeNode =
  | {
      left: TreeNode | null;
      right: TreeNode | null;
      length: number;
    }
  | string;

export const iterateTree = (
  tree: TreeNode | null,
  func: (node: TreeNode | null) => void
) => {
  func(tree);
  if (!tree || typeof tree === "string") return;
  if ("left" in tree) iterateTree(tree.left, func);
  if ("right" in tree) iterateTree(tree.right, func);
};

export const findNode = (
  tree: TreeNode | null,
  pos: number
): TreeNode | null => {
  if (!tree) return null;
  if (typeof tree === "string") return tree;
  if (tree.length >= pos) return findNode(tree.left, pos);
  return findNode(tree.right, pos);
};
