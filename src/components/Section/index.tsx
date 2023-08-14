import shapeshifter from "classnames";
import { LitCarousel } from "../LitCarousel";

const images = [
  "https://placehold.co/480x300?font=roboto&text=Slide+1",
  "https://placehold.co/480x300?font=roboto&text=Slide+2",
  "https://placehold.co/480x300?font=roboto&text=Slide+3",
  "https://placehold.co/480x300?font=roboto&text=Slide+4",
];

type Props = {
  type: "banner" | "simple" | "carousel" | "instructions";
  children: JSX.Element;
};

export function Section({ type, children }: Props) {
  switch (type) {
    case "banner":
      return (
        <div className="bg-gradient-to-r py-8 from-CORAL to-[#f38c64] flex flex-col sm:flex-row items-center justify-between h-[100%] w-[100%] px-16 overflow-hidden">
          {children}
        </div>
      );
    case "carousel":
      return (
        <div className="bg-slate-400">
          <LitCarousel loop>
            {images.map((src, i) => {
              return (
                // 👇 style each individual slide.
                // relative - needed since we use the fill prop from next/image component
                // h-64 - arbitrary height
                // flex[0_0_100%]
                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                <div className="flex-[0_0_100%]" key={i}>
                  {/* use object-cover + fill since we don't know the height and width of the parent */}
                  <img src={src} className="object-fill w-full" alt="alt" />
                </div>
              );
            })}
          </LitCarousel>
        </div>
      );
    case "instructions":
      return (
        <div className="bg-gradient-to-r from-[#f4df64] to-[#edd757] border-b-[12px] border-t-[12px] border-[#f4e588] rounded-2xl  flex flex-col items-center justify-between pb-12 h-auto w-[100%]">
          {children}
        </div>
      );
    default:
      return null;
  }
}
