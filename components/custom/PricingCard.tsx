/* eslint-disable @next/next/no-img-element */

export const PricingCard = () => {
  return (
    <section className="bg-neutral overflow-hidden" id="pricing">
      <a
        className="pt-16 pb-24 px-8 max-w-5xl mx-auto flex flex-col items-center group"
        href="about:blank"
        target="_blank"
      >
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight text-transparent opacity-80 bg-clip-text bg-gradient-to-r from-primary to-error">
            Acenda sua sala de aula!
          </h2>
          <h2 className="font-bold text-xl lg:text-3xl tracking-tight text-transparent opacity-50 bg-clip-text bg-gradient-to-r to-primary from-error">
            E experimente por 14 dias grátis.
          </h2>
        </div>
        <div
          id="CARD"
          className="flex flex-row gap-4 p-8 rounded-xl bg-gradient-to-br border-dashed border-l-[12px] border-r-[12px] font-mono items-center w-full pointer-events-none select-none text-center min-w-[244px] max-w-[480px] from-rose-400 via-primary to-rose-400 border-amber-100/70 text-white font-burtons font-bold cursor-pointer group-hover:opacity-95"
        >
          <img
            className="w-[27%] h-[27%] md:w-[22%] md:h-[22%]"
            src="/logo_head.png"
            alt=""
          />
          <div className="flex-col flex w-full items-center justify-center leading-none">
            <p className="font-bold text-xl">ACESSO ILIMITADO</p>
            <p className="text-white opacity-85 font-space_mono">
              aos palcos de apredizagem!
            </p>
            <p className="mt-4 line-through opacity-65">16/mês</p>
            <div className="flex flex-row justify-center items-center">
              <div className="text-2xl flex flex-col justify-center items-center">
                <div className="flex flex-row items-center">
                  <p className="text-base mr-2 font-bold">R$</p>
                  8/mês
                </div>
                <span className="text-base font-jubilat text-center text-amber-100">
                  PREÇO DE PRÉ-LANÇAMENTO
                </span>
              </div>
            </div>
          </div>
        </div>

        <ul className="font-space_mono text-base mt-8 lg:text-lg tracking-tight text-accent opacity-70">
          <li>— Receba as Lits no seu WhatsApp;</li>
          <li>— Acesse os palcos na plataforma.</li>
        </ul>
        <h2 className="font-bold text-xl mt-4 lg:text-3xl tracking-tight text-transparent opacity-70 bg-clip-text bg-gradient-to-r to-violet-500 from-accent">
          Clique e comece hoje mesmo!
        </h2>
      </a>
    </section>
  );
};
