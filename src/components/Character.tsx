type Props = {
  hasCursor: boolean;
  char: string;
};

const Character = ({ hasCursor, char }: Props) => {
  return <span className={hasCursor ? "bg-red-500" : ""}>{char}</span>;
};

export default Character;
