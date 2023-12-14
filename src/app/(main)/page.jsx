import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import { Indicators } from '@/components/Indicators'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />

      <Testimonials />

      <Indicators />

      <FrequentlyAskedQuestions />
    </>
  )
}
