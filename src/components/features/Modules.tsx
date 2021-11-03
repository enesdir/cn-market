import { Box, Flex, Text } from '@chakra-ui/layout';
import { BiBarChartAlt } from 'react-icons/bi';
import { BsBuilding, BsFillPeopleFill } from 'react-icons/bs';
import { FaFileContract, FaChartPie } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { SiGlassdoor, SiMicrosoftonenote } from 'react-icons/si';

import { Module } from './Module';

const Modules = () => {
  const modules = [
    {
      text: 'Governance Portal',
      icon: SiGlassdoor,
    },
    {
      text: 'Corporate Universe',
      icon: BsBuilding,
    },
    {
      text: 'Contract Domain',
      icon: FaFileContract,
    },
    {
      text: 'Investor Relations',
      icon: FaChartPie,
    },
    {
      text: 'Dispute Portfolio',
      icon: RiPlantFill,
    },
    {
      text: 'Minute Book',
      icon: SiMicrosoftonenote,
    },
    {
      text: 'Reporting Tool',
      icon: BiBarChartAlt,
    },
    {
      text: 'Attendance Register',
      icon: BsFillPeopleFill,
    },
  ];
  return (
    <Box color="blackAlpha.600" mt="7">
      <Text textTransform="uppercase" fontSize="smaller" fontWeight="extrabold" mb="4">
        All Modules
      </Text>
      <Flex wrap="wrap">
        {modules.map(mod => (
          <Module key={mod.text} text={mod.text} icon={mod.icon} />
        ))}
      </Flex>
    </Box>
  );
};

export default Modules;
