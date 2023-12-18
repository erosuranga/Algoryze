'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import '../styles/colortext.css'
import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'
import MacbookTrading from '@/images/macbook_trading.png'
import { Transition } from '@headlessui/react'

const SlideFromRight = ({ contentIndex, setContentIndex, indicatorsContent }) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const elementRef = useRef(null)

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
    if (contentIndex < 3) {
      setContentIndex(contentIndex + 1)
    } else {
      setContentIndex(0)
    }
  }

  function prevImage() {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1)
    } else {
      setContentIndex(3)
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
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

              {
                indicatorsContent.map((item, index) => (
                  <div className={
                    contentIndex === index
                      ? 'duration-700 ease-in-out'
                      : `hidden transform transition duration-700 ease-in-out`
                  }
                    data-carousel-item key={index}>
                    <img
                      src={item.image}
                      className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                ))
              }
            </div>

            {/** Left */}
            <button
              type="button"
              onClick={() => prevImage()}
              className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 group-hover:bg-white/90 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-transparent dark:group-hover:bg-gray-200/60 dark:group-focus:ring-gray-800/70">
                <svg
                  className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            {/** Right */}
            <button
              type="button"
              onClick={() => nextImage()}
              className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 group-hover:bg-white/90 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-transparent dark:group-hover:bg-gray-200/60 dark:group-focus:ring-gray-800/70">
                <svg
                  className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </Transition.Child>
      </Transition.Root>
    </div>
  )
}

export function Indicators() {

  const [contentIndex, setContentIndex] = useState(0)

  const indicatorsContent = [
    {
      title: "#1 Previous Day High and Low + Separators Daily/Weekly",
      text: "This powerful tool uses separators to mark trading days and weeks, displaying clear lines for the previous day's high and low on your chart. Understanding these reference points is crucial for predicting the next trading day's direction, be it a trend continuation or reversal. The indicator offers customization options, allowing you to adjust line appearance and intensity to match your chart's design. Enhance your trading analysis with this adaptable tool, visually tracking key reference points while tailoring it to your chart's aesthetics and needs.",
      image: 'https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png'
    },
    {
      title: "#2 Previous Day High and Low + Separators Daily/Weekly",
      text: "This powerful tool uses separators to mark trading days and weeks, displaying clear lines for the previous day's high and low on your chart. Understanding these reference points is crucial for predicting the next trading day's direction, be it a trend continuation or reversal. The indicator offers customization options, allowing you to adjust line appearance and intensity to match your chart's design. Enhance your trading analysis with this adaptable tool, visually tracking key reference points while tailoring it to your chart's aesthetics and needs.",
      image: 'https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png'
    },
    {
      title: "#3 Previous Day High and Low + Separators Daily/Weekly",
      text: "This powerful tool uses separators to mark trading days and weeks, displaying clear lines for the previous day's high and low on your chart. Understanding these reference points is crucial for predicting the next trading day's direction, be it a trend continuation or reversal. The indicator offers customization options, allowing you to adjust line appearance and intensity to match your chart's design. Enhance your trading analysis with this adaptable tool, visually tracking key reference points while tailoring it to your chart's aesthetics and needs.",
      image: 'https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png'
    },
    {
      title: "#4 Previous Day High and Low + Separators Daily/Weekly",
      text: "This powerful tool uses separators to mark trading days and weeks, displaying clear lines for the previous day's high and low on your chart. Understanding these reference points is crucial for predicting the next trading day's direction, be it a trend continuation or reversal. The indicator offers customization options, allowing you to adjust line appearance and intensity to match your chart's design. Enhance your trading analysis with this adaptable tool, visually tracking key reference points while tailoring it to your chart's aesthetics and needs.",
      image: 'https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png'
    }
  ]


  return (
    <div className="relative isolate overflow-hidden bg-[#151823] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-[#151823]">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className=" font-Optician text-xl font-bold leading-7 text-[#efb810]">
                Analyze faster
              </p>
              <h1 className=" relative z-50 mt-2 font-Optician text-3xl font-medium text-[#efb810] sm:text-5xl">
                Algoryze Indicators
              </h1>
              <h2 className="mt-10 font-AkzidenzLight text-xl font-medium text-gray-50 sm:text-xl">
                {indicatorsContent[contentIndex].title}
              </h2>
              <p className="mt-6 font-AkzidenzLight font-medium leading-8  text-gray-100">
                {indicatorsContent[contentIndex].text}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:-ml-12 sm:-mt-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
          {/** fix positioning */}
          <SlideFromRight contentIndex={contentIndex} setContentIndex={setContentIndex} indicatorsContent={indicatorsContent} />
        </div>
      </div>
    </div>
  )
}
