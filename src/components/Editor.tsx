/* eslint-disable no-control-regex */
import { TreeNode, findNode, iterateTree } from "@/utils/tree";
import { useState } from "react";
import Line from "./Line";

type Cursor = {
  row: number;
  column: number;
};

const Editor = () => {
  const [stringTree, setStringTree] = useState<TreeNode>({
    length: 14,
    left: {
      length: 5,
      left: "22222",
      right: "\n33333333"
    },
    right: null
  });
  const [cursor, setCursor] = useState<Cursor>({
    column: 0,
    row: 14
  });

  const nodeWithCursor = findNode(stringTree, cursor.row);

  console.log(nodeWithCursor);

  let fileString = "";
  iterateTree(stringTree, (node) => {
    if (typeof node === "string") fileString = fileString.concat(node);
  });
  const lines = fileString.split("\n");
  return (
    <main className="border-2 border-white h-full w-full p-5">
      {lines.map((l, i) => (
        <Line text={l} number={i + 1} cursorIndex={cursor.column} />
      ))}
    </main>
  );
};

export default Editor;
