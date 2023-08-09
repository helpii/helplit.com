import shapeshifter from "classnames";

type Props = {
  type: "banner" | "simple" | "carousel" | "instructions";
  children: JSX.Element;
};

export function Section({ type, children }: Props) {
  switch (type) {
    case "banner":
      return (
        <div className="bg-dust bg-cover flex flex-row items-center justify-between w-[100%] px-16 overflow-hidden">
          {children}
        </div>
      );
    case "carousel":
      return (
        <div className="flex flex-row items-center justify-between my-12 h-[600px] w-[100%]">
          {children}
        </div>
      );
    case "instructions":
      return (
        <div className="bg-gradient-to-r from-[#f4df64] to-[#edd757] border-b-8 border-t-8 border-[#f4e588] rounded-xl  flex flex-col items-center justify-between my-12 h-[600px] w-[100%]">
          {children}
        </div>
      );
    default:
      return null;
  }
}
