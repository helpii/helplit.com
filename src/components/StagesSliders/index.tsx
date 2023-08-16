export function StagesSliders() {
  return (
    <div className="w-full select-none flex flex-col font-TITULO text-xl my-10">
      <div className="flex w-full flex-row-reverse">
        <img
          className="relative top-2 left-2 max-w-[150px]"
          src="/fun/sitting.png"
          alt=""
        />
      </div>
      <div className="bg-[#d3f2cb] h-auto py-2 m-auto overflow-hidden relative w-auto">
        <ul className="flex w-[calc(250px*9)] animate-scroll">
          <li className="w-[250px]">Palco 1</li>
          <li className="w-[250px]">Palco 2</li>
          <li className="w-[250px]">Palco 3</li>
          <li className="w-[250px]">Palco 1</li>
          <li className="w-[250px]">Palco 2</li>
          <li className="w-[250px]">Palco 3</li>
          <li className="w-[250px]">Palco 1</li>
          <li className="w-[250px]">Palco 2</li>
          <li className="w-[250px]">Palco 3</li>
          <li className="w-[250px]">Palco 1</li>
          <li className="w-[250px]">Palco 2</li>
          <li className="w-[250px]">Palco 3</li>
        </ul>
      </div>
      {/* GAMBI!! rotate-180 */}
      <div className="bg-[#d3f2cb] h-auto py-2 m-auto overflow-hidden relative w-auto rotate-180">
        <ul className="flex w-[calc(250px*6)] animate-scroll rotate-180">
          <li className="w-[250px] rotate-180">Palco 4</li>
          <li className="w-[250px] rotate-180">Palco 5</li>
          <li className="w-[250px] rotate-180">Palco 6</li>
          <li className="w-[250px] rotate-180">Palco 4</li>
          <li className="w-[250px] rotate-180">Palco 5</li>
          <li className="w-[250px] rotate-180">Palco 6</li>
        </ul>
      </div>
      <div
        className="bg-white   
      w-full relative py-5 px-2 border-b-2 border-[#83aa79]
      lg:w-[55%] lg:absolute lg:mt-12 lg:py-10 lg:pl-[62px] lg:pr-[48px] lg:border-2 lg:border-l-0 lg:border-black lg:rounded-tr-xl lg:rounded-br-xl"
      >
        <h1
          className="font-TITULO 
        text-2xl mb-2 text-center
        md:text-4xl md:mb-4 md:text-left"
        >
          Usamos metodologia própria para categorizar as habilidades da BNCC.
        </h1>
        <p
          className="font-TEXTO  font-extralight 
        texl-md mt-2 text-center
        md:text-lg md:mt-4 md:text-left"
        >
          Com ela você garante que vai encontrar somente as habilidades que
          fazem sentido para a sua aula.
        </p>
      </div>
    </div>
  );
}
