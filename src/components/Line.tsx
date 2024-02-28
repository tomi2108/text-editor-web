import Character from "./Character";

type Props = {
  text: string;
  number: number;
  cursorIndex: number;
};
const Line = ({ text, number, cursorIndex }: Props) => {
  return (
    <div>
      <span className="bold mr-10">{number}</span>
      {text.split("").map((c, i) => (
        <Character key={i} hasCursor={cursorIndex === i} char={c} />
      ))}
    </div>
  );
};

export default Line;
