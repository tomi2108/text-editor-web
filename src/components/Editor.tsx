/* eslint-disable no-control-regex */
import { TreeNode, iterateTree } from "@/utils/tree";
import { useState } from "react";
import Line from "./Line";

type Cursor = {
  row: number;
  column: number;
};

const Editor = () => {
  const [stringTree, setStringTree] = useState<TreeNode>({
    length: 5,
    left: {
      left: {
        left: null,
        right: null,
        length: 2,
        string: "22222"
      },
      right: {
        left: null,
        right: null,
        length: 2,
        string: "\n33333333"
      },
      length: 2
    },
    right: {
      left: null,
      right: null,
      length: 2
    }
  });
  const [cursor, setCursor] = useState<Cursor>({
    column: 0,
    row: 0
  });
  let fileString = "";
  iterateTree(stringTree, (node) => {
    fileString = fileString.concat(node.string ?? "");
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
