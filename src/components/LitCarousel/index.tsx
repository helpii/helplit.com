import { Carousel } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "phosphor-react";

export function LitCarousel() {
  return (
    <>
      <p className="text-NUDE">RENDER THIS ONLY ON PC</p>
      <Carousel
        leftControl={<ArrowLeft size={48} color="#f27d54" weight="duotone" />}
        rightControl={<ArrowRight size={48} color="#f27d54" weight="duotone" />}
        slideInterval={15000}
        indicators={false}
      >
        <img alt="..." src="lits/lit1-mod.png" />
        <img alt="..." src="lits/lit1-mod.png" />
        <img alt="..." src="lits/lit1-mod.png" />
      </Carousel>
      <p className="text-NUDE">RENDER THIS ONLY ON PC</p>
    </>
  );
}
