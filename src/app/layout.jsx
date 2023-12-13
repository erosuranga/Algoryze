import { DM_Sans, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - Algoryze',
    default: 'Algoryze - Algorithmic Trading for Everyone',
  },
  description:
    'At Algoryze we specialize in cutting-edge algorithmic trading solutions. Our team of experts harnesses the power of advanced algorithms and data analytics to navigate the complexities of financial markets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('h-full ')}>
      <body className="flex min-h-full bg-[#151823]">
        <div className="flex w-full flex-col">{children}</div>
        {/** Flowbite */}
        {/*  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script> */}
      </body>
    </html>
  )
}
