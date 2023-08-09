type Props = {
  type: "left" | "right" | "notice";
  children: JSX.Element;
};

export function Step({ type, children }: Props) {
  switch (type) {
    case "left":
      return <div className="flex flex-row items-center">{children}</div>;
    case "right":
      return <div className="flex flex-row items-center">{children}</div>;
    case "notice":
      return <div className="flex flex-row items-center">{children}</div>;
    default:
      return null;
  }
}
