export function StagesSliders() {
  return (
    <div className="w-full items-end select-none flex flex-col">
      <img
        className="relative top-2 left-2 max-w-[150px]"
        src="/fun/sitting.png"
        alt=""
      />
      <div className="bg-slate-200 h-auto py-2 m-auto overflow-hidden relative w-auto">
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
      <div className="bg-slate-200 h-auto py-2 m-auto overflow-hidden relative w-auto rotate-180">
        <ul className="flex w-[calc(250px*6)] animate-scroll rotate-180">
          <li className="w-[250px] rotate-180">Palco 4</li>
          <li className="w-[250px] rotate-180">Palco 5</li>
          <li className="w-[250px] rotate-180">Palco 6</li>
          <li className="w-[250px] rotate-180">Palco 4</li>
          <li className="w-[250px] rotate-180">Palco 5</li>
          <li className="w-[250px] rotate-180">Palco 6</li>
        </ul>
      </div>
    </div>
  );
}
