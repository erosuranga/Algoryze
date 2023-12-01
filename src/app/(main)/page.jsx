import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { CallToAction } from '@/components/CallToAction'
import { Roadmap } from '@/components/Roadmap'
import { Testimonials } from '@/components/Testimonials'
import { Sponsors } from '@/components/Sponsors'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import Prices from '@/components/prices'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Testimonials />
      <Roadmap />

      {/* <Sponsors /> */}
      {/*   <Newsletter /> */}
      <Prices />
      <FrequentlyAskedQuestions />
    </>
  )
}
