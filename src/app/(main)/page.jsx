import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { CallToAction } from '@/components/CallToAction'

import { Testimonials } from '@/components/Testimonials'
import { Sponsors } from '@/components/Sponsors'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import { Indicators } from '@/components/Indicators'
import { Cta } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <CallToAction />
      <Testimonials />

      <Indicators />

      {/* <Sponsors /> */}
      {/*   <Newsletter /> */}

      <FrequentlyAskedQuestions />
    </>
  )
}
