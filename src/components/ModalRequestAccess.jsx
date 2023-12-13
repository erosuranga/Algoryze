import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'
import RegisterUser from './RegisterUser'

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

export default function ModalRequestAccess({ showModal, setShowModal }) {
  const [showUser, setShowUser] = useState(false)
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#151823] px-4 pb-4 pt-5 text-left font-AkzidenzLight tracking-wider shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <Image
                    src={Isotipo}
                    alt="isotipo"
                    className="mx-auto h-16 w-auto text-gray-100"
                  />
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base leading-6 text-gray-100"
                    >
                      Accede a nuestros indicadores gratuitos completando el
                      siguiente formulario
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="mt-5 flex rounded-xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                        <input
                          type="user"
                          required
                          pattern='pattern="^(?!.*[@.com]).*$'
                          placeholder="Usuario de Tradingview"
                          aria-label="User Name"
                          className="-my-2.5 h-12 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none"
                        />
                      </div>
                      {/*  <div className="tracki mt-5 text-sm text-gray-300">
                        El usuario no debe ser un correo electronico ni contener
                        espacios.
                        <button
                          type="button"
                          className="max-w-35%   ml-2 inline-flex justify-center rounded-xl bg-yellow-700 px-3 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
                        >
                          <ArrowRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div> */}
                      <div className="mt-2 flex rounded-xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                        <input
                          type="name"
                          required
                          placeholder="Nombre Completo"
                          aria-label="Full Name"
                          className="-my-2.5 h-12 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none"
                        />
                      </div>
                      <div className="mt-2 flex rounded-xl bg-yellow-500/20 py-2.5 pr-2.5 shadow-xl shadow-yellow-900/5 focus-within:ring-2 focus-within:ring-yellow-600">
                        <input
                          type="email"
                          required
                          placeholder="Correo Electrónico"
                          aria-label="Email address"
                          className="-my-2.5 h-12 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-200 placeholder:text-slate-300/50 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => setShowUser(true)}
                    className="inline-flex w-full justify-center rounded-xl border border-yellow-400 bg-transparent px-3.5 py-2.5 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
                  >
                    Solicitar Acceso
                    {/*  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          {showUser && (
            <RegisterUser setShowUser={setShowUser} showUser={showUser} />
          )}
        </div>
      </Dialog>
    </Transition.Root>
  )
}
