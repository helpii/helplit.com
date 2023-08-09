import {
  Container,
  TopNavbar,
  LitCarousel,
  Section,
  InstructionsStep,
} from "../../components";

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
          <InstructionsStep type="notice">
            <div className="flex flex-row items-center">
              <div className="bg-helpii_talk w-[200px] h-[200px] bg-cover"></div>
              <p className="bg-NUDE border-b-4  text-2xl border-CORAL text-COAL font-TITULO rounded-xl p-4 items-center justify-center">
                Olá, eu sou a <strong>Helpii</strong>, e vou te mostrar como é
                fácil <br />
                planejar uma aula usando a Helplit como apoio.
              </p>
            </div>
          </InstructionsStep>

          <InstructionsStep type="right">
            <>
              <img src="/instructions/step1.png" alt="" width="333.33" />
              <div className="flex flex-col px-16">
                <p className="font-TITULO text-4xl text-OCEAN">
                  Você começa <strong>pensando</strong>...
                </p>
                <p className="text-black-400 font-TEXTO font-extralight text-lg">
                  “Como posso ensinar esse conteúdo de uma forma que seja mais
                  divertida, interativa e as crianças aprendam mais fácil?"
                </p>
              </div>
            </>
          </InstructionsStep>

          <InstructionsStep type="left">
            <>
              <div className="flex flex-col px-16">
                <p className="font-TITULO text-4xl text-OCEAN">
                  Você entra na <strong>Helplit</strong>...
                </p>
                <p className="text-black-400 font-TEXTO font-extralight text-lg">
                  E se inspira nas diversas ideias de aulas produzidas por
                  professores profissionais, com foco em desenvolver as
                  habilidades propostas pela BNCC.
                </p>
              </div>
              <img src="/instructions/step2.png" alt="" width="358.66" />
            </>
          </InstructionsStep>

          <InstructionsStep type="right">
            <>
              <img src="/instructions/step3.png" alt="" width="333.33" />
              <div className="flex flex-col px-16">
                <p className="font-TITULO text-4xl text-OCEAN">
                  Você sai com uma <strong>aula pronta</strong>!
                </p>
                <p className="text-black-400 font-TEXTO font-extralight text-lg">
                  Adaptando a lit para o conteúdo que você quer ensinar, você
                  sai com uma aula interativa, divertida e diferente em muito
                  menos tempo.
                </p>
              </div>
            </>
          </InstructionsStep>
        </>
      </Section>
    </div>
  );
}
