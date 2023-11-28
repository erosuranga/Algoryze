'use client'

import React, { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import MacbookTrading from '@/images/macbook_trading.png'
import { Transition } from '@headlessui/react'


const AnimatedMacbook = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the target element is in the viewport
        if (entries[0].isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      },
      {
        // Root is the viewport by default
        root: null,
        // 0% means the element becomes visible as soon as any part of it enters the viewport
        threshold: 0.5,
      }
    );

    // Start observing the target element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup: stop observing when the component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [])


  return (
    <div ref={elementRef} className="relative">
      <Transition.Root show={isInViewport} as={Fragment} >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Image src={MacbookTrading} alt="macbook" className="h-auto text-gray-100" />

        </Transition.Child>
      </Transition.Root>
    </div>
  )
  
}


export function CallToAction() {

  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32 h-screen grid grid-cols-2">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          {/** topbar */}
          <div className='h-16 mb-10'>
            <Image src={Isotipo} alt="isotipo" className="h-16 w-auto text-gray-100" />
          </div>
          <h2 className="font-display text-7xl font-medium tracking-tighter text-gray-50 sm:text-9xl">
            TOP #1
          </h2>
          <span className="ml-2 mt-4 font-display text-4xl tracking-tight text-gray-50">
            INDICADOR
          </span>
          <br></br>
          <span className="ml-2 font-display text-4xl tracking-tight text-yellow-400">
            INSTITUCIONAL
          </span>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="ml-2 font-display text-4xl tracking-tight text-gray-50">
            +10000 <span className='text-yellow-400'>USUARIOS</span>
          </span>

          <br></br>
          <div className='text-center'>
            <button className="animate-bounce mt-20 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
              Suscribirme
            </button>
          </div>

        </div>
      </Container>
      <Container className="relative">
        <AnimatedMacbook />
      </Container>
    </section>
  )
}
