import shapeshifter from "classnames";

type Props = {
  type: "banner" | "simple";
  children: JSX.Element;
};

export function Section({ type, children }: Props) {
  return (
    <div
      className={shapeshifter(
        "flex flex-row items-center justify-between h-[50vh] w-[100%]",
        {
          "bg-red-300": type === "banner",
        }
      )}
    >
      {children}
    </div>
  );
}
