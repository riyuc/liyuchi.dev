'use client';

import MainHero from "@/components/_mainpage/hero";
import MainInformation from "@/components/_mainpage/information";
// import { AnimatedLayout } from "@/components/animated-layout";

export default function Home() {
  return (
    // <AnimatedLayout>
        <div className='flex flex-col items-center gap-10 w-full'>
          {/* Hero */}
          <section className='px-4 sm:px-0 flex flex-col md:gap-10 gap-5 max-w-3xl'>
            <MainHero />
          </section>
          {/* Information */}
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <MainInformation />
          </section>
        </div>
    // </AnimatedLayout>
  );
}
