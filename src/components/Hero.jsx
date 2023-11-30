import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import '../styles/hero.css'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <span className="sr-only">Algoryze - </span>

          <div class="text-box">
            <h1 className="fixed-text text-center font-display text-5xl  font-bold uppercase tracking-tighter text-gray-50 sm:text-8xl">
              Automatiza <br /> tu
            </h1>
            <div className="animate-text">
              <div>
                <span>TRAIDING</span>
                <span>MONEY</span>
                <span>TIME</span>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-6 text-center font-display text-2xl tracking-tight text-gray-50">
            La nueva generacion del trading autoamtizado de la maano de
            algorize, unete para aumetnar tus rendimientos de una manera sideral
            y eficaz.
          </div>
          {/* 
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>           
          */}
          {/*  <Button href="#" className="mt-10 w-full sm:hidden">
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
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-50">
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
