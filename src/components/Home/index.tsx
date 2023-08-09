import { Container, TopNavbar, LitCarousel, Section } from "../../components";

export function Home() {
  return (
    <div className="bg-NUDE">
      <TopNavbar />
      <Section type="banner">
        <>
          <div className="flex flex-col gap-8 mr-12 text-COAL">
            <p className="font-TITULO text-6xl font-extralight">
              Planeje aulas <span className="font-bold">divertidas</span> e
              produtivas em <span className="font-bold">menos tempo</span>.
            </p>
            <p className="font-TEXTO text-xl font-extralight">
              Sabemos que <span className="font-normal">você já é expert</span>{" "}
              em preparar uma boa aula, por isso nossa missão é te entregar a{" "}
              <span className="font-normal">inspiração</span> que você já busca
              para planejar aulas produtivas e divertidas, sem levar{" "}
              <span className="font-normal">o tempo que você leva hoje</span>.
            </p>
          </div>
          <img
            className="my-16"
            src="profe.png"
            alt=""
            width="496"
            height="400"
          />
        </>
      </Section>
      <Section type="carousel">
        <LitCarousel />
      </Section>
      <Section type="instructions">
        <>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
          <p>hehehehehhe</p>
        </>
      </Section>
    </div>
  );
}
