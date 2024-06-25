import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
//import FeaturesAccordion from '@/components/FeaturesAccordion';
import FAQ from '@/components/FAQ';
//import Testimonials3 from '@/components/Testimonials3';
//import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { LitWorld } from '@/components/custom/LitWorld';
import { Instructions } from '@/components/custom/Instructions';
//import Pricing from '@/components/Pricing';
import { Team } from '@/components/custom/Team';
import { PricingCard } from '@/components/custom/PricingCard';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <LitWorld />
        <PricingCard />
        <Instructions />
        <FAQ />
        {/** <Testimonials3 /> */}
        <Team />
      </main>
      <Footer />
    </>
  );
}
