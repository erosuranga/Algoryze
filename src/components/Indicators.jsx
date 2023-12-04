import '../styles/colortext.css'
import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

export function Indicators() {
  return (
    <div className="relative isolate overflow-hidden bg-[#151823] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-yellow-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200}height={200}
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
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-500">Analyze faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl">Algoryze Indicators</h1>
              <h2 className='mt-10 text-xl font-bold tracking-tight text-gray-50 sm:text-xl'>Previous Day High and Low + Separators Daily/Weekly</h2>
              <p className="mt-6 leading-8 text-gray-100">
                This indicator is a powerful tool designed for traders on TradingView.
                This indicator utilizes separators to distinguish between trading days and weeks, all while highlighting the previous day&apos;s
                high and low points with clear lines on your chart.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="w-[48rem] h-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://s3.tradingview.com/snapshots/d/d8dnXvmQ.png" alt="" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-8 text-gray-100 lg:max-w-lg">
              <p>
                By marking each day of the week at the top of your chart, it provides a visual reference for the time within your trading week, and each day is separated based on the 00:00 time of your chosen timezone.
              </p>
              <p className='my-4'>
                Understanding the reference points of the previous day&apos;s highs and lows is crucial for predicting the likely direction of the next trading day, whether it&apos;s a continuation or reversal of the trend.
              </p>
              <p className='my-4'>
                One of the standout features of this indicator is its adaptability. You can customize the appearance of the lines to suit your chart design and adjust their intensity as needed.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className='text-gray-100 ml-5'>
                    <strong className="font-semibold text-gray-50">UTC OFFSET:</strong>{' '}
                    Set your timezone here to ensure accurate time references.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className='text-gray-100 ml-5'>
                    <strong className="font-semibold text-gray-50"> DAILY SEPARATOR:</strong>{' '}
                    Customize the color, style, width, and text color of the daily separators to match your preferences.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className='text-gray-100 ml-5'>
                    <strong className="font-semibold text-gray-50">WEEKLY SEPARATOR:</strong>{' '}
                    Tailor the appearance of the weekly separators with options for color, style, width, and text color.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className='text-gray-100 ml-5'>
                    <strong className="font-semibold text-gray-50">PREVIOUS HIGHS & LOWS:</strong>{' '}
                    Customize the appearance of the lines representing previous day's highs and lows, including color, style, width, and text color.
                  </span>
                </li>
              </ul>

              <p className='my-8'>
                With the Previous Day High and Low + Separators Daily/Weekly indicator, you can enhance your trading analysis by visually tracking important reference points and adapt the indicator to your chart's aesthetics and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
