import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { CallToAction } from '@/components/CallToAction'

import { Testimonials } from '@/components/Testimonials'
import { Sponsors } from '@/components/Sponsors'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import { Indicators } from '@/components/Indicators'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Testimonials />

      <Indicators />

      {/* <Sponsors /> */}
      {/*   <Newsletter /> */}

      <FrequentlyAskedQuestions />
    </>
  )
}
