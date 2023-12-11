import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Testimonials } from '@/components/Testimonials'
import { Sponsors } from '@/components/Sponsors'
import { FrequentlyAskedQuestions } from '@/components/FAQs'
import { Indicators } from '@/components/Indicators'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
 return (
 <>
  <Hero />
  <CallToAction />
  {/* <CallToAction /> */}
  <Testimonials />

  <Indicators />

  {/* <Sponsors /> */}
  {/* <Newsletter /> */}

  <FrequentlyAskedQuestions />
 </>
 )
}
