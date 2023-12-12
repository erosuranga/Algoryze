'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import '../styles/colortext.css'
import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'
import MacbookTrading from '@/images/macbook_trading.png'
import { Transition } from '@headlessui/react'

const SlideFromRight = () => {
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
                            <img src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/** Image 2 */}
                        <div className={image === 1 ? 'duration-700 ease-in-out' : `transform transition hidden duration-700 ease-in-out`} data-carousel-item>
                            <img src="https://static.tradingview.com/static/bundles/slider.0f29f659d6db3d3514e6.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/** Image 3 */}
                        <div className={image === 2 ? 'duration-700 ease-in-out' : `transform transition hidden duration-700 ease-in-out`} data-carousel-item>
                            <img src="https://static.tradingview.com/static/bundles/advanced-charts.f1788c1e6e8b222d0b85.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>        
                        {/** Image 4 */}
                        <div className={image === 3 ? 'duration-700 ease-in-out' : `transform transition hidden duration-700 ease-in-out`} data-carousel-item>
                            <img src="https://s3.tradingview.com/6/6W7to2SK_mid.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>                
                    </div>                                

                    {/** Left */}
                    <button type="button" onClick={() => prevImage()} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-200/90 group-hover:bg-white/90 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    {/** Right */}
                    <button type="button" onClick={() => nextImage()} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-200/90 group-hover:bg-white/90 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
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

export function Indicators() {
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
                            <h1 className=" font-Optician relative z-50 mt-2 text-3xl font-medium text-[#efb810] sm:text-5xl">
                                Algoryze Indicators
                            </h1>
                            <h2 className="mt-10 font-AkzidenzLight text-xl font-medium text-gray-50 sm:text-xl">
                                Previous Day High and Low + Separators Daily/Weekly
                            </h2>
                            <p className="mt-6 font-AkzidenzLight font-medium leading-8  text-gray-100">
                                This powerful tool uses separators to mark trading days and weeks, displaying clear lines for the previous day&apos;s high and low on your chart.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <SlideFromRight />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl font-AkzidenzLight text-base font-medium leading-8 text-gray-100 lg:max-w-lg">
                            <p>
                                It provides a visual reference for the trading week, dividing each day based on your chosen timezone&apos;s 00:00 time.
                            </p>
                            <p className="my-4">
                                Understanding these reference points is crucial for predicting the next trading day&apos;s direction, be it a trend continuation or reversal.
                            </p>
                            <p className="my-4">
                                The indicator offers customization options, allowing you to adjust line appearance and intensity to match your chart&apos;s design.
                            </p>

                            <p className="my-8">
                                Enhance your trading analysis with this adaptable tool, visually tracking key reference points while tailoring it to your chart&apos;s aesthetics and needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
