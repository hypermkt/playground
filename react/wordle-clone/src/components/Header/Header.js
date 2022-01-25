import { Box, Heading, Icon, Flex, Spacer } from '@chakra-ui/react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp, IoStatsChart } from "react-icons/io5";


export const Header = () => {
  return (
    <>
      <Box
        w="500px"
        p={1}
        borderBottom="1px"
        borderBottomColor="#d3d6da"
        color="black"
        align="center"
      >
        <Flex>
          <Box p="2" width="80px">
            <Icon m="1" w={6} h={6} as={FaRegQuestionCircle} color="#999999" />
          </Box>
          <Spacer />
          <Box >
            <Heading>WORDLE</Heading>
          </Box>
          <Spacer />
          <Box p="2" width="80px">
            <Icon m="1" w={6} h={6} as={IoStatsChart} color="#999999" />
            <Icon m="1" w={6} h={6} as={IoSettingsSharp} color="#999999" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
