export default function Home() {
  return (
    <>
      <div className="header flex justify-between p-3">
        <div className="text-2xl">ThreadStock</div>
      </div>
      <div className="main-container px-3">
        <div className="home-banner relative h-80 overflow-hidden rounded-2xl border-2 border-indigo-200 shadow shadow-indigo-300 mb-5">
          <img
            className="h-full w-full object-cover object-center opacity-50"
            src="/img/header-img.jpg"
            alt=""
          />
          <div className="absolute text-7xl z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-md text-center">
            <div>Organiza tus hilos</div>
            <div>Inspira tus bordados</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1/3">
            <div className="w-1/2 m-auto bg-indigo-300 py-2 rounded-3xl text-center hover:zoom-105 cursor-pointer transition-all">Bastidores</div>
          </div>
          <div className="flex-1/3">
            <div className="w-1/2 m-auto bg-indigo-300 py-2 rounded-3xl text-center hover:zoom-105 cursor-pointer transition-all">Fieltro</div>
          </div>
          <div className="flex-1/3">
            <div className="w-1/2 m-auto bg-indigo-300 py-2 rounded-3xl text-center hover:zoom-105 cursor-pointer transition-all">Hilos</div>
          </div>
        </div>
      </div>
    </>
  );
}
