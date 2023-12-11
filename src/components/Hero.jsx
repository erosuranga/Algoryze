import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import '../styles/hero.css'

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

   <div className="text-box w-full text-center">
   <h1 className=" relative z-50 inline-block text-center text-5xl font-light uppercase text-gray-100 sm:text-8xl">
    Automatiza <br /> tu
   </h1>
   <div className="animate-text font-semibold">
    <div className="">
    <span className=" mx-auto">TRAIDING</span>
    <span className="mx-auto">MONEY</span>
    <span className="mx-auto">TIME</span>
    </div>
   </div>
   </div>

   <p className="text-1xl relative z-50 mt-6 text-center font-AkzidenzLight font-medium leading-8 text-gray-100">
   This indicator is a powerful tool designed for traders on
   TradingView. This indicator utilizes separators to distinguish
   between trading days and weeks, all while highlighting the previous
   day&apos;s high and low points with clear lines on your chart.
   </p>
   {/* 
   <p>
    At DeceptiConf you’ll learn about the latest dark patterns being
    developed to trick even the smartest visitors, and you’ll learn
    how to deploy them without ever being detected.
   </p>
   </div>   
   */}
   {/* <Button href="#" className="mt-10 w-full sm:hidden">
   Get your tickets
   </Button> */}
   {/* <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
   {[
    ['Speakers', '18'],
    ['People Attending', '2,091'],
    ['Venue', 'Staples Center'],
    ['Location', 'Los Angeles'],
   ].map(([name, value]) => (
    <div key={name}>
    <dt className="font-mono text-sm text-blue-600">{name}</dt>
    <dd className="mt-0.5 text-2xl font-semibold text-gray-50">
     {value}
    </dd>
    </div>
   ))}
   </dl> */}
  </div>
  </Container>
 </div>
 )
}
