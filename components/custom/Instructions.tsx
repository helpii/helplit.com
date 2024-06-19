/* eslint-disable @next/next/no-img-element */
import { InstructionsStep } from './InstructionStep';
export function Instructions() {
  return (
    <div className="bg-base-200 flex flex-col items-center justify-between pb-12 h-auto w-[100%] font-jubilat">
      <InstructionsStep type="notice">
        <>
          <div
            className="flex flex-row items-center w-full justify-center -z-0
              sm:justify-center"
          >
            <img
              className="absolute opacity-80 -z-10 
                left-[2%] rotate-[70deg]
                sm:left-[30%]"
              src="/doodle.gif"
              alt=""
            />
            <div
              className="bg-HELPII_IDEA bg-cover
                w-[140px] h-[140px]"
            ></div>
            <p
              className="bg-white border-b-4 rounded-xl p-4 items-center mr-4 text-xl text-center px-4
              sm:text-2xl"
            >
              Oi, eu sou a <strong>Helpii</strong>!<br />
              Na Helplit fazemos assim:
            </p>
          </div>
        </>
      </InstructionsStep>

      <InstructionsStep type="right">
        <>
          <img src="/instructions/step1.png" alt="" width="333.33" />
          <div
            className="flex flex-col px-16 md:px-24
              text-right 
              sm:text-left"
          >
            <p className="font-TITULO leading-none text-4xl">
              Você começa <strong>pensando</strong>...
            </p>
            <p className="mt-4 leading-snug text-lg">
              &quot;Como posso ensinar esse conteúdo de uma forma que seja mais
              divertida, interativa e facilitada para o aprendizado das
              crianças?&quot;
            </p>
          </div>
        </>
      </InstructionsStep>

      <InstructionsStep type="left">
        <>
          <img src="/instructions/step2.png" alt="" width="358.66" />
          <div className="flex flex-col px-16 text-left md:px-24">
            <p className="text-4xl leading-none">
              Você entra <br className="sm:hidden" /> na{' '}
              <strong>Helplit</strong>...
            </p>
            <p className="mt-4 leading-snug text-black-400 text-lg">
              E se inspira nas diversas ideias de aulas produzidas por
              professores profissionais, com foco em desenvolver as habilidades
              propostas pela BNCC.
            </p>
          </div>
        </>
      </InstructionsStep>

      <InstructionsStep type="right">
        <>
          <img src="/instructions/step3.png" alt="" width="333.33" />
          <div
            className="flex flex-col px-16 md:px-24
              text-right 
              sm:text-left"
          >
            <p className="text-4xl leading-none">
              Você sai com <br className="sm:hidden" /> uma{' '}
              <strong>aula pronta</strong>!
            </p>
            <p className="mt-4 leading-snug text-lg">
              Adaptando a lit para o conteúdo que você quer ensinar, você sai
              com uma aula interativa, divertida e diferente em muito menos
              tempo.
            </p>
          </div>
        </>
      </InstructionsStep>
    </div>
  );
}
