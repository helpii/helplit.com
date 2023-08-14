type Props = {
  type: "left" | "right" | "notice";
  children: JSX.Element;
};

export function InstructionsStep({ type, children }: Props) {
  switch (type) {
    case "left":
      return (
        <div
          className="flex w-full justify-between items-end
        flex-col gap-8 mt-8
        md:flex-row-reverse md:items-center"
        >
          {children}
        </div>
      );
    case "right":
      return (
        <div
          className="flex w-full justify-between 
        flex-col gap-8 mt-8
        md:flex-row md:items-center"
        >
          {children}
        </div>
      );
    case "notice":
      return (
        <div className="flex flex-row items-center w-full justify-around">
          {children}
        </div>
      );
    default:
      return null;
  }
}
