'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import ModalRequestAccess from './ModalRequestAccess'

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

const IndicatorsCarousel = () => {
  const imagesUrls = [
    'https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png', 
    'https://s3.tradingview.com/snapshots/z/zC16fLpC.png', 
  ]

  const [image, setImage] = useState(0)

  return (
    <div className="grid gap-4">
     
        <div          
          className="transform transition duration-700 ease-in-out"
          data-carousel-item
          >
            <img src={imagesUrls[image]} className="h-auto rounded-lg hover:origin-bottom hover:scale-x-110 hover:scale-y-125 shadow-lg shadow-gray-950" alt={`Image ${image}`}/>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img
          className="mx-auto h-auto rounded-lg hover:scale-90 shadow-lg shadow-gray-950"
          src={imagesUrls[0]}
          onClick={() => setImage(0)}
          alt=""
        />
        <img
          className="mx-auto h-auto rounded-lg hover:scale-90 shadow-lg shadow-gray-950"
          src={imagesUrls[1]}
          onClick={() => setImage(1)}          
          alt=""
        />
      </div>
    </div>
  )
}

export function CallToAction() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="scroll-smooth bg-[#151823]">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#151823] px-6 pt-16  shadow-2xl shadow-gray-950 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0">
          {/** Yellow shine at bottom */}
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

          {/** Text */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="gold-shine-animation font-Optician text-5xl font-medium text-[#efb810] sm:text-4xl">
              TOP #1
            </h2>
            <h2 className="font-Optician text-5xl font-medium text-[#efb810] sm:text-4xl">
              INDICADOR INSTITUCIONAL
            </h2>
            <p className="mt-6 font-AkzidenzLight text-base leading-8 tracking-wider text-gray-50">
              Descubre la excelencia con nuestro destacado indicador
              institucional. En nuestro compromiso con la calidad,
              proporcionamos información valiosa que impulsa el éxito y la
              confianza en cada paso.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 font-AkzidenzLight tracking-wider lg:justify-start">
              <div>
                <h3 className="text-lg font-medium text-yellow-400">
                  Accede a indicadores gratuitos{' '}
                  <span aria-hidden="true">&darr;</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="mt-3 inline-flex items-center gap-x-2 rounded-xl bg-yellow-700 px-3.5 py-2.5 text-sm font-semibold tracking-wider text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
                >
                  Solicitar Acceso
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/** Images */}
          <div className="mt-10 sm:my-auto w-full sm:w-3/4">
            <IndicatorsCarousel />
          </div>
        </div>
      </div>

      {/** Modal */}
      {showModal && (
        <ModalRequestAccess setShowModal={setShowModal} showModal={showModal} />
      )}
    </div>
  )
}
