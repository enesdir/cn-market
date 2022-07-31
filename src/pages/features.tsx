import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';

import LandingLayout from '@/components/LandingLayout';
import { FeaturesHero, Modules, TwoColumns } from '@/features/landing';

function Features() {
  return (
    <React.Fragment>
      <LandingLayout logoLabel="FEATURES PAGE" basket={false} footer={true}>
        <FeaturesHero />
        <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
          <TwoColumns />
          <Divider variant="solid" my="12" borderColor="gray.300" borderWidth="0.5px" />
          <Modules />
        </Box>
      </LandingLayout>
    </React.Fragment>
  );
}

export default Features;
