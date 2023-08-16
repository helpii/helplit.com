import { ArrowLeft, ArrowRight } from "phosphor-react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useState, useEffect } from "react";
import shapeshifter from "classnames";

// Define the props
type CarouselProps = PropsWithChildren & EmblaOptionsType;

export const LitCarousel = ({ children, ...options }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <div className="flex flex-row">
      <CarouselControls
        side="left"
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <CarouselControls
        side="right"
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </div>
  );
};

type ControlsProps = {
  side: string;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: ControlsProps) => {
  switch (props.side) {
    case "left":
      return (
        <button
          onClick={() => {
            if (props.canScrollPrev) {
              props.onPrev();
            }
          }}
          disabled={!props.canScrollPrev}
          className={shapeshifter({
            "px-4 py-2": true,
            "bg-NUDE": !props.canScrollNext,
            "bg-[#FCF9F7]": props.canScrollNext,
          })}
        >
          <ArrowLeft size={32} color="#f27d54" weight="duotone" />
        </button>
      );
    case "right":
      return (
        <button
          onClick={() => {
            if (props.canScrollNext) {
              props.onNext();
            }
          }}
          disabled={!props.canScrollNext}
          className={shapeshifter({
            "px-4 py-2": true,
            "bg-NUDE": !props.canScrollNext,
            "bg-[#FCF9F7]": props.canScrollNext,
          })}
        >
          <ArrowRight size={48} color="#f27d54" weight="duotone" />
        </button>
      );
    default:
      return <h1>error</h1>;
  }
};
