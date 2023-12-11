"use client"
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

function ArrowRightIcon(props) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
            <path
                d="m14 7 5 5-5 5M19 12H5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export function CallToAction() {


    const [success, setSuccess] = useState(false);

    return (
        <div className="bg-[#151823]">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-[#151823] px-6 pt-16 shadow-2xl shadow-2xl shadow-gray-950 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    {/** Yellow shine at bottom */}
                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#FAE6B1" />
                                <stop offset={1} stopColor="#92400e" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="font-Optician text-5xl font-medium text-[#efb810] sm:text-4xl">
                            TOP #1
                            <br />
                            INDICADOR INSTITUCIONAL
                        </h2>
                        <p className="mt-6 font-AkzidenzLight text-base leading-8 text-gray-50">
                            Descubre la excelencia con nuestro destacado indicador
                            institucional. En nuestro compromiso con la calidad,
                            proporcionamos información valiosa que impulsa el éxito y la
                            confianza en cada paso.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            
                            <form className='flex flex-col' onSubmit={() => handleSubmit(e)}>
                                <h3 className="text-lg font-semibold text-yellow-400">
                                    Accede a indicadores gratuitos <span aria-hidden="true">&darr;</span>
                                </h3>
                                <div className="mt-5 flex rounded-3xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                                    <input type="user" required placeholder="Usuario de Tradingview" aria-label="User Name" className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none h-12"/>                                    
                                </div>
                                <div className="mt-2 flex rounded-3xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                                    <input type="name" required placeholder="Nombre Completo" aria-label="Full Name" className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none h-12"/>                                    
                                </div>                                
                                <div className="mt-2 flex rounded-3xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                                    <input type="email" required placeholder="Correo Electrónico" aria-label="Email address" className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none h-12"/>                                    
                                </div>

                                <button type="button" onClick={() => setSuccess(true)} className="mt-3 mx-auto inline-flex items-center gap-x-2 rounded-full bg-yellow-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800">                                    
                                    {
                                        success  ? 
                                        (
                                            <>
                                                Acceso Solicitado
                                                <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> 
                                            </>
                                            ) : (
                                            <>
                                                Solicitar Acceso
                                                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                                            </>
                                        )                                        
                                    }
                                </button>
                            </form>
                            
                        </div>
                    </div>
                    {/** Image Indicator 1 */}
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                    {/** Image Indicator 2 */}
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img className="absolute left-14 top-32 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
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
