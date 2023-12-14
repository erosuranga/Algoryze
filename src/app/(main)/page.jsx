import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Testimonials } from '@/components/Testimonials'
import { Sponsors } from '@/components/Sponsors'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import { Indicators } from '@/components/Indicators'
import { CallToAction } from '@/components/CallToAction'
import { CallToActionFeo } from '@/components/CallToAction_feo'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      {/* <CallToActionFeo /> */}
      {/* <CallToAction /> */}
      <Testimonials />

      <Indicators />

      {/* <Sponsors /> */}
      {/* <Newsletter /> */}

      <FrequentlyAskedQuestions />
    </>
  )
}
