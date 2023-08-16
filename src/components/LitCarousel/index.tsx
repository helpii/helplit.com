import { ArrowLeft, ArrowRight } from "phosphor-react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useState, useEffect } from "react";
import classNames from "classnames";

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
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  );
};

type ControlsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: ControlsProps) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200": !props.canScrollPrev,
          "bg-indigo-400": props.canScrollPrev,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200": !props.canScrollNext,
          "bg-indigo-400": props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
