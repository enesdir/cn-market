import React from 'react';

import LandingLayout from '@/components/LandingLayout';
import { Hero, Testimonials, ThreeColumns } from '@/features/landing';

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
