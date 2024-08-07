/* eslint-disable @next/next/no-img-element */

export const PricingCardEdu = () => {
  return (
    <section
      className="bg-neutral overflow-hidden flex flex-col lg:flex-row items-center justify-center pt-16 pb-24 px-12 md:px-48 gap-8"
      id="pricing"
    >
      <div id="BENEFITS BLOCK" className="flex flex-col gap-4 max-w-[400px]">
        <span className="font-bold text-2xl text-[#5e5a58]">
          Pare de perder tempo construindo aulas do zero.
        </span>
        <ul className="text-[#611f84] list-disc list-inside flex flex-col gap-2  text-sm">
          <p className="text-lg font-bold">Você receberá:</p>
          <li>
            Diversas inspirações de aulas criadas por profes excelentes e
            pensadas para desenvolver habilidades;
          </li>
          <li>Novas inspirações de aulas todas as semanas;</li>
          <li>
            Acesso à comunidade de profes do Brasil inteiro para trocar
            experiências e compartilhar aplicações de aulas;
          </li>
          <li>
            Acesso exclusivo às futuras atualizações da plataforma e
            possibilidade de receber como afiliado da Helplit.
          </li>
        </ul>
      </div>
      <div
        id="CARD"
        className="flex flex-row gap-4 py-6 px-8 rounded-xl bg-gradient-to-br border-dashed border-l-[6px] border-r-[6px] font-mono items-center w-full select-none text-center min-w-[244px] max-w-[480px] from-rose-400 via-primary to-rose-400 border-amber-100/70 text-white group-hover:opacity-95"
      >
        <div className="flex-col flex w-full items-center justify-center leading-none">
          <p className="font-bold text-2xl">Acenda a sua sala de aula!</p>
          <p className="text-white text-sm opacity-65">
            Experimente por 14 dias grátis.
          </p>
          <p className="mt-4 opacity-65 font-jubilat text-xs">de 295 por</p>
          <div className="flex flex-row justify-center items-center">
            <div className="text-4xl flex flex-col justify-center items-center">
              <div className="flex flex-row items-center font-bold">
                <p className="text-xs mr-2 font-bold">R$</p>
                <p>195/ano</p>
              </div>
              <span className="text-xs font-jubilat text-center text-amber-100 font-bold">
                PROMO DE PRÉ-LANÇAMENTO
              </span>
              <div className="text-xs opacity-75 my-4 font-space_mono">
                <p>— Receba as Lits no seu WhatsApp;</p>
                <p>— Acesse os palcos na plataforma.</p>
              </div>
              <a
                className="btn btn-primary bg-accent border-none bg-gradient-to-br from-accent/80 to-violet-500 text-white text-xs cursor-pointer"
                href="https://app.helplit.com/"
                target="_blank"
              >
                Clique e comece hoje mesmo!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
