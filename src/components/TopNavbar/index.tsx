export function TopNavbar() {
  return (
    <nav className="bg-white border-gray-200 w-[100%] md:pl-12 md:pr-14 select-none">
      <div className="flex flex-row items-center justify-between p-2 font-TEXTO">
        <a href="https://helplit.com.br/" className="flex items-center">
          <img src="hlt-navbar.svg" className="h-10" alt="Helplit Logo" />
        </a>
        {/* 
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="hidden md:flex font-medium flex-row md:gap-x-12">
            <li>
              <a
                href="#instructions"
                className="text-COAL hover:text-CORAL transition-colors ease-in-out"
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#palcos"
                className="text-COAL hover:text-CORAL transition-colors ease-in-out"
              >
                Palcos de Conhecimento
              </a>
            </li>
            <li>
              <a
                href="#comunidade"
                className="text-COAL hover:text-CORAL transition-colors ease-in-out"
              >
                Comunidade
              </a>
            </li>
          </ul>
        </div>
        */}

        <div className="flex flex-row gap-x-8 items-center">
          {/*
          <a
            href="#"
            className="hidden md:block text-COAL hover:text-CORAL transition-colors ease-in-out"
          >
            Entrar
      </a>
      */}
          <a
            target="_blank"
            href="https://helplit-comunidade.framer.website/"
            className="mr-2 md:mr-0 text-ROXO border-2 border-ROXO py-1 px-4 rounded-full hover:bg-ROXO hover:text-white transition-colors ease-in-out"
          >
            Comece agora! 💡
          </a>
        </div>
      </div>
    </nav>
  );
}
