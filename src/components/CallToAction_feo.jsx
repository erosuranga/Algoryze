'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import ModalRequestAccess from './ModalRequestAccess'
import { Transition } from '@headlessui/react'

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


const IndicatorsSlider = () => {

  const [isInViewport, setIsInViewport] = useState(false)
  const elementRef = useRef(null)

  const [image, setImage] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the target element is in the viewport
        if (entries[0].isIntersecting) {
          setIsInViewport(true)
        } else {
          setIsInViewport(false)
        }
      },
      {
        // Root is the viewport by default
        root: null,
        // 0% means the element becomes visible as soon as any part of it enters the viewport
        threshold: 0.5,
      },
    )

    // Start observing the target element
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    // Cleanup: stop observing when the component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  function nextImage() {
    console.log("next", image)
    if (image < 3) {
      setImage(image + 1)
    } else {
      setImage(0)
    }
  }

  function prevImage() {
    console.log("prev", image)
    if (image > 0) {
      setImage(image - 1)
    } else {
      setImage(3)
    }
  }

  return (
    <div ref={elementRef} className="relative">
      <Transition.Root show={isInViewport} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >

          {/** Carousel */}
          <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/** Image 1 */}
              <div className={image === 0 ? 'duration-700 ease-in-out' : `transform transition hidden duration-700 ease-in-out`} data-carousel-item>
                <img src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/** Image 2 */}
              <div className={image === 1 ? 'duration-700 ease-in-out' : `transform transition hidden duration-700 ease-in-out`} data-carousel-item>
                <img src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>              
            </div>

            {/** Left */}
            <button type="button" onClick={() => prevImage()} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-200/90 group-hover:bg-white/90 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            {/** Right */}
            <button type="button" onClick={() => nextImage()} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-200/90 group-hover:bg-white/90 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>

        </Transition.Child>
      </Transition.Root>
    </div>
  )
}

export function CallToAction() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-[#151823] scroll-smooth">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#151823] px-6 pt-16 shadow-2xl shadow-gray-950 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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

          {/** Text & Title */}
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-16">
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

            <div className="mt-10 flex items-center justify-center gap-x-6 font-AkzidenzLight tracking-wider">
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

            <div className=''>
              <IndicatorsSlider />
            </div>

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
