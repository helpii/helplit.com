import {
  TopNavbar,
  LitCarousel,
  Section,
  InstructionsStep,
  StagesSliders,
} from "../../components";

import { ArrowRight } from "phosphor-react";

export function Home() {
  return (
    <div className="bg-NUDE overflow-hidden">
      <TopNavbar />
      <Section type="hero">
        <>
          <div
            className="flex flex-col text-COAL 
            gap-2
            sm:mr-12"
          >
            <p
              className="font-TITULO font-extralight 
              text-2xl text-center
              sm:text-6xl md:text-start"
            >
              Planeje aulas <span className="font-bold">divertidas</span> e
              produtivas em <span className="font-bold">menos tempo</span>.
            </p>
            <img
              className="brightness-[400] md:opacity-0 mb-8"
              src="/rabisco.png"
              alt=""
            />
            <p
              className="font-TEXTO text-xl font-extralight 
              text-justify mb-8
              sm:text-start md:mb-0"
            >
              Sabemos que <span className="font-normal">você já é expert</span>{" "}
              em preparar uma boa aula, por isso nossa missão é te entregar a{" "}
              <span className="font-normal">inspiração</span> que você já busca
              para planejar aulas produtivas e divertidas, sem levar{" "}
              <span className="font-normal">o tempo que você leva hoje</span>.
            </p>
          </div>
          <img className="sm:py-8" src="profe.png" alt="" />
        </>
      </Section>
      <Section type="carousel">
        <LitCarousel />
      </Section>
      <Section type="instructions">
        <>
          <InstructionsStep type="notice">
            <>
              <div
                className="flex flex-row items-center w-full justify-start -z-0
              sm:justify-center"
              >
                <img
                  className="absolute opacity-80 -z-10 
                left-[2%] rotate-[70deg]
                sm:left-[30%]"
                  src="/fun/doodle.gif"
                  alt=""
                />
                <div
                  className="bg-helpii_talk  bg-cover
                w-[140px] h-[200px] 
                sm:w-[200px] sm:h-[200px]"
                ></div>
                <p
                  className="bg-NUDE border-b-4 border-CORAL text-COAL font-TITULO rounded-xl p-4 items-center mr-4
              text-xl text-center px-4
              sm:text-2xl"
                >
                  Oi, eu sou a <strong>Helpii</strong>!<br />
                  Esse é o jeito Helplit:
                </p>
              </div>
            </>
          </InstructionsStep>

          <InstructionsStep type="right">
            <>
              <img src="/instructions/step1.png" alt="" width="333.33" />
              <div
                className="flex flex-col px-16
              text-right 
              sm:text-left"
              >
                <p className="font-TITULO  text-OCEAN leading-none text-4xl">
                  Você começa <strong>pensando</strong>...
                </p>
                <p className="mt-4 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
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
              <div className="flex flex-col px-16 text-left">
                <p className="font-TITULO text-4xl text-OCEAN leading-none">
                  Você entra na <strong>Helplit</strong>...
                </p>
                <p className="mt-4 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
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
              <div
                className="flex flex-col px-16 
              text-right 
              sm:text-left"
              >
                <p className="font-TITULO text-4xl text-OCEAN leading-none">
                  Você sai com uma <strong>aula pronta</strong>!
                </p>
                <p className="mt-4 leading-snug text-black-400 font-TEXTO font-extralight text-lg">
                  Adaptando a lit para o conteúdo que você quer ensinar, você
                  sai com uma aula interativa, divertida e diferente em muito
                  menos tempo.
                </p>
              </div>
            </>
          </InstructionsStep>
        </>
      </Section>
      <Section type="stages">
        <StagesSliders />
      </Section>
      <Section type="default">
        <div className="flex flex-col xl:flex-row">
          <div className="lg:mt-20 flex flex-col px-4 sm:px-16 gap-8">
            <h1 className="font-TITULO text-3xl">
              Mais do que um repositório de conteúdos{" "}
              <span className="font-bold">para te ajudar</span>, faça parte de
              uma comunidade de professores{" "}
              <span className="font-bold">dispostos a inspirar</span>.
            </h1>
            <p className="font-extralight text-lg">
              Queremos ser mais do que apenas um lugar para você usar de vez em
              quando, queremos te ajudar a se conectar de diversas formas. Mais
              do que com as lits, se inspire vendo como outros professores
              adaptaram elas para o conteúdo que precisaram ensinar.
            </p>
            <button className="bg-CORAL flex flex-row my-4 items-center justify-center text-base md:text-lg w-full sm:max-w-[400px] py-2 px-2 text-white gap-4 rounded-full border-2 border-RUST">
              Junte-se a profes do Brasil todo{" "}
              <ArrowRight size={36} color="#fff" weight="fill" />
            </button>
          </div>
          <img className="p-8 w-auto" src="/fun/blob.png" alt="" />
        </div>
      </Section>
      <Section type="cta">
        <div className="flex flex-col bg-ROXINHO p-16 rounded-xl justify-center items-center text-center gap-4 mx-16">
          <h1 className="font-TITULO text-ROXAOZAO text-4xl">
            A Helplit tem uma causa:
          </h1>
          <p className="font-TEXTO text-2xl font-extralight text-ROXAOZAO">
            Transformar a sala de aula em um palco de aprendizado, uma parceria
            entre professor e aluno.{" "}
            <span className="font-bold">Junte-se a nós!</span>
          </p>
          <button className="px-4 bg-ROXO flex flex-row mt-4 items-center justify-center text-base md:text-lg max-w-[600px] w-auto py-2 text-white gap-4 rounded-full border-2 border-ROXAOZAO">
            Comece transformando sua sala de aula!
          </button>
        </div>
      </Section>
      <Section type="footer">
        <div className="flex flex-col md:flex-row gap-x-32 font-TEXTO text-lg justify-between">
          <div className="flex flex-col mr-8 gap-6">
            <img src="hlt_white.png" className="h-fit max-w-[200px]" alt="" />
            <h1>Blog</h1>
            <h1>Preços</h1>
            <h1>Sobre nós</h1>
            <h1>Como funciona</h1>
          </div>
          <div className="flex flex-col mr-16 mb-16 gap-6">
            <img
              src="hlt_white.png"
              className="h-fit max-w-[200px] opacity-0"
              alt=""
            />
            <h1 className="flex flex-row gap-2">
              <ArrowRight size={32} color="#383533" weight="fill" />
              @helplit_instagram
            </h1>
            <h1 className="flex flex-row gap-2">
              <ArrowRight size={32} color="#383533" weight="fill" />
              @helplit_facebook
            </h1>
            <h1 className="flex flex-row gap-2">
              <ArrowRight size={32} color="#383533" weight="fill" />
              @helplit_youtube
            </h1>
          </div>
          <img
            src="/fun/vida.png"
            className="f-fit max-w-[300px] border-2 border-RUST rounded-md"
            alt=""
          />
        </div>
      </Section>
    </div>
  );
}
