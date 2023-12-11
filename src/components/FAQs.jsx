'use client'

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Isotipo from '../images/logos/isotipo_golden.png'
import '../styles/colortext.css'

const faqs = [
 {
 question: '¿Cómo funciona Algorize?',
 answer:
  'Algorize es una plataforma que te permite automatizar tus estrategias de trading. Puedes crear algoritmos personalizados y ejecutarlos en diferentes mercados financieros. Simplemente configura tus reglas y condiciones, y Algorize ejecutará automáticamente tus operaciones.',
 },
 {
 question: '¿Con qué mercados puedo usar Algorize?',
 answer:
  'Algorize es compatible con una amplia gama de mercados, incluyendo Forex, acciones, criptomonedas, materias primas y más. Puedes utilizar Algorize en diferentes mercados según tus preferencias y estrategias de trading.',
 },
 {
 question: '¿Puedo ganar cada trade con esta herramienta?',
 answer:
  'No podemos garantizar que ganarás cada trade utilizando Algorize. El rendimiento de tus operaciones dependerá de tu estrategia, configuración y análisis del mercado. Algorize te proporciona una herramienta poderosa para ejecutar tus estrategias de manera automatizada, pero el éxito en el trading siempre implica riesgos.',
 },
 {
 question: '¿Funciona con MetaTrader 4/5?',
 answer:
  'Sí, Algorize es compatible con MetaTrader 4 y MetaTrader 5. Puedes conectar tu cuenta de trading de MetaTrader a Algorize y ejecutar tus estrategias utilizando estas plataformas populares.',
 },
 {
 question: '¿Puedo obtener un código de descuento?',
 answer:
  'Actualmente, Algorize no ofrece códigos de descuento públicos. Sin embargo, te recomendamos estar atento a las promociones y ofertas especiales que puedan lanzar en el futuro. También puedes ponerte en contacto con el equipo de soporte de Algorize para obtener información sobre posibles descuentos o promociones disponibles.',
 },
 {
 question: '¿Puedo obtener un código de descuento?',
 answer:
  'Actualmente, Algorize no ofrece códigos de descuento públicos. Sin embargo, te recomendamos estar atento a las promociones y ofertas especiales que puedan lanzar en el futuro. También puedes ponerte en contacto con el equipo de soporte de Algorize para obtener información sobre posibles descuentos o promociones disponibles.',
 },
 {
 question: '¿Puedo obtener un código de descuento?',
 answer:
  'Actualmente, Algorize no ofrece códigos de descuento públicos. Sin embargo, te recomendamos estar atento a las promociones y ofertas especiales que puedan lanzar en el futuro. También puedes ponerte en contacto con el equipo de soporte de Algorize para obtener información sobre posibles descuentos o promociones disponibles.',
 },
]

export function FrequentlyAskedQuestions() {
 return (
 <div className="clsx bg-[#151823]">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
  {/** topbar */}
  <div className="h-16">
   <Image
   src={Isotipo}
   alt="isotipo"
   className="h-16 w-auto text-gray-100"
   />
  </div>
  {/** title */}{' '}
  <div className="mx-auto max-w-xl text-center">
   <h2 className="  font-Optician text-4xl font-medium text-[#efb810] sm:text-5xl">
   Preguntas Frecuentes
   </h2>
  </div>
  {/** content */}
  <div className="relative mx-auto max-w-4xl divide-y divide-yellow-900/10 font-AkzidenzLight font-bold shadow-2xl">
   <dl className="ml-5 mr-5 mt-10 space-y-6 divide-y divide-[#FAE6B1] ">
   {faqs.map((faq) => (
    <Disclosure as="div" key={faq.question} className="pt-6">
    {({ open }) => (
     <>
     <dt>
      <Disclosure.Button className=" flex w-full items-start justify-between text-left text-[#efb810] hover:text-gray-300">
      <span className="text-base font-medium leading-7">
       {faq.question}
      </span>
      <span className="ml-6 flex h-7 items-center">
       {open ? (
       <MinusSmallIcon
        className="h-6 w-6 text-yellow-400"
        aria-hidden="true"
       />
       ) : (
       <PlusSmallIcon
        className="h-6 w-6 text-yellow-400"
        aria-hidden="true"
       />
       )}
      </span>
      </Disclosure.Button>
     </dt>
     <Disclosure.Panel as="dd" className="mt-4 pr-12">
      <p className="text-base font-light leading-7 text-gray-300">
      {faq.answer}
      </p>
     </Disclosure.Panel>
     </>
    )}
    </Disclosure>
   ))}
   </dl>
  </div>
  </div>
 </div>
 )
}
