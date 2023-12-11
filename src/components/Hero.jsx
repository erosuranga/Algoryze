'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import '../styles/hero.css'

export function TypeWriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['Trading', 'Ingreso', 'Dinero']

  function type() {
    const currentWord = words[wordIndex]

    const shouldDelete = isDeleting ? 1 : -1

    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete),
    )

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 500)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200)
    return () => clearTimeout(timer)
  }, [wordIndex, isDeleting, text])

  return text
}

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <Container className="relative">
        <div className="ripple-background absolut z-40">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle mediun shade4"></div>
          <div className="circle small shade5 "></div>
        </div>

        <div className=" mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <span className="sr-only">Algoryze - </span>

          <div className="w-full text-center font-Optician">
            <h1 className="relative z-50 inline-block text-center text-5xl font-light uppercase text-gray-100 sm:text-8xl">
              Automatiza tu
            </h1>
            <br></br>
            <h1 className="relative z-50 inline-block text-center text-5xl font-light uppercase text-yellow-400 sm:text-8xl">
              {'#'}
              <TypeWriter />
            </h1>
          </div>

          <p className="text-1xl relative z-50 mt-6 text-center font-AkzidenzLight font-medium leading-8 text-gray-100">
            This indicator is a powerful tool designed for traders on
            TradingView. This indicator utilizes separators to distinguish
            between trading days and weeks, all while highlighting the previous
            day&apos;s high and low points with clear lines on your chart.
          </p>
        </div>
      </Container>
    </div>
  )
}
