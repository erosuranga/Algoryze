export function Cta() {
  return (
    <div className=" bg-[#151823]">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#151823] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FAE6B1" />
                <stop offset={1} stopColor="#92400e" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-5xl font-semibold tracking-tight text-[#FFA101] sm:text-4xl">
              TOP #1
              <br />
              INDICADOR INSTITUCIONAL
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-50">
              Descubre la excelencia con nuestro destacado indicador
              institucional. En nuestro compromiso con la calidad,
              proporcionamos información valiosa que impulsa el éxito y la
              confianza en cada paso.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="animate-bounce rounded-md bg-[#FFA101] px-3.5 py-2.5 text-lg font-semibold text-gray-200 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Suscribirme
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
