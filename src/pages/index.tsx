import React from 'react';

import Hero from '@/components/home/Hero';
import { Testimonials } from '@/components/home/Testimonials';
import ThreeColumns from '@/components/home/ThreeColumns';
import LandingLayout from '@/components/LandingLayout';

function Home() {
  return (
    <React.Fragment>
      <LandingLayout logoLabel="LANDING PAGE" basket={false} footer={true}>
        <Hero />
        <Testimonials />
        <ThreeColumns />
      </LandingLayout>
    </React.Fragment>
  );
}

export default Home;
