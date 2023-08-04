import { useAuthor } from "../../contexts/AuthorContext";

export function AuthorSelector() {
  const { setAuthor } = useAuthor();
  return (
    <div className="max-w-[90%] w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-center ">
      {/*Lower Card Section*/}
      <div className="flex flex-row text-white text-xl font-bold gap-8 mb-4">
        <p>
          em um Universo
          <br />
          remotamente familiar...
        </p>
      </div>
      <div className="py-1 px-4 rounded-2xl flex flex-row font-semibold text-lg items-start gap-2">
        <>
          <div
            onClick={() => setAuthor("@numen527")}
            className="bg-white rounded-full py-1 px-1 items-center text-black flex flex-row hover:opacity-90 cursor-pointer"
          >
            <div className="border-2 border-black bg-numen527 w-8 h-8 bg-cover rounded-full mr-[2px]" />
            <p className="mx-1">@numen527</p>
          </div>
          <div
            onClick={() => setAuthor("????????")}
            className="bg-white rounded-full py-1 px-1 items-center text-black flex flex-row hover:opacity-90 cursor-pointer ml-2"
          >
            <div className="border-2 border-black bg-arcanas w-8 h-8 bg-cover rounded-full mr-[2px]" />
            <p className="mx-1">????????</p>
          </div>
        </>
      </div>
      <div></div>
    </div>
  );
}
