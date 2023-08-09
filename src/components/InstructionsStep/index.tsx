type Props = {
  type: "left" | "right" | "notice";
  children: JSX.Element;
};

export function InstructionsStep({ type, children }: Props) {
  switch (type) {
    case "left":
      return (
        <div className="flex flex-row items-center w-full justify-between bg-[#f4e588] mt-8">
          {children}
        </div>
      );
    case "right":
      return (
        <div className="flex flex-row items-center w-full justify-between bg-[#f4e588] mt-8">
          {children}
        </div>
      );
    case "notice":
      return (
        <div className="flex flex-row items-center w-full justify-around bg-[#f4e588]">
          {children}
        </div>
      );
    default:
      return null;
  }
}
