import {
  Container,
  TopNavbar,
  LitCarousel,
  Section,
  InstructionsStep,
} from "../../components";

export function Home() {
  return (
    <div className="bg-NUDE overflow-hidden">
      <TopNavbar />
      <Section type="banner">
        <>
          <div
            className="flex flex-col text-COAL 
            gap-4 
            md:gap-8 md:mr-12"
          >
            <p
              className="font-TITULO font-extralight 
              text-2xl text-center 
              md:text-6xl md:text-start"
            >
              Planeje aulas <span className="font-bold">divertidas</span> e
              produtivas em <span className="font-bold">menos tempo</span>.
            </p>
            <p
              className="font-TEXTO text-xl font-extralight 
              text-justify mb-8
              md:text-start md:mb-0"
            >
              Sabemos que <span className="font-normal">você já é expert</span>{" "}
              em preparar uma boa aula, por isso nossa missão é te entregar a{" "}
              <span className="font-normal">inspiração</span> que você já busca
              para planejar aulas produtivas e divertidas, sem levar{" "}
              <span className="font-normal">o tempo que você leva hoje</span>.
            </p>
          </div>
          <img className="md:py-8" src="profe.png" alt="" />
        </>
      </Section>
      <Section type="carousel">
        <LitCarousel />
      </Section>
      <Section type="instructions">
        <>
          <InstructionsStep type="notice">
            <>
              <div className="flex flex-row items-center w-full justify-center -z-0">
                <img
                  className="absolute opacity-80 -z-10 
                left-[2%] rotate-[70deg]
                sm:left-[30%]"
                  src="/instructions/doodle.gif"
                  alt=""
                />
                <div className="bg-helpii_talk w-[200px] h-[200px] bg-cover"></div>
                <p
                  className="bg-NUDE border-b-4  border-CORAL text-COAL font-TITULO rounded-xl p-4 items-center mr-4
              text-xl text-center px-4
              sm:text-2xl"
                >
                  Oi, eu sou a <strong>Helpii</strong>!<br />E assim é o jeito
                  Helplit:
                </p>
              </div>
            </>
          </InstructionsStep>

          <InstructionsStep type="right">
            <>
              <img src="/instructions/step1.png" alt="" width="333.33" />
              <div className="flex flex-col px-16">
                <p className="font-TITULO  text-OCEAN leading-none text-4xl">
                  Você começa <strong>pensando</strong>...
                </p>
                <p className="mt-2 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
                  “Como posso ensinar esse conteúdo de uma forma que seja mais
                  divertida, interativa e facilitada para o aprendizado das
                  crianças?"
                </p>
              </div>
            </>
          </InstructionsStep>

          <InstructionsStep type="left">
            <>
              <img src="/instructions/step2.png" alt="" width="358.66" />
              <div className="flex flex-col px-16">
                <p className="font-TITULO text-4xl text-OCEAN leading-none">
                  Você entra na <strong>Helplit</strong>...
                </p>
                <p className="mt-2 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
                  E se inspira nas diversas ideias de aulas produzidas por
                  professores profissionais, com foco em desenvolver as
                  habilidades propostas pela BNCC.
                </p>
              </div>
            </>
          </InstructionsStep>

          <InstructionsStep type="right">
            <>
              <img src="/instructions/step3.png" alt="" width="333.33" />
              <div className="flex flex-col px-16">
                <p className="font-TITULO text-4xl text-OCEAN leading-none">
                  Você sai com uma <strong>aula pronta</strong>!
                </p>
                <p className="mt-2 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
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
