type Props = {
  type: "left" | "right" | "notice";
  children: JSX.Element;
};

export function InstructionsStep({ type, children }: Props) {
  switch (type) {
    case "left":
      return (
        <div className="flex flex-row items-center w-full justify-between  mt-8">
          {children}
        </div>
      );
    case "right":
      return (
        <div className="flex flex-row items-center w-full justify-between mt-8">
          {children}
        </div>
      );
    case "notice":
      return (
        <div className="flex flex-row items-center w-full justify-around ">
          {children}
        </div>
      );
    default:
      return null;
  }
}
