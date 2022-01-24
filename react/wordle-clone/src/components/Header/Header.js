import { Box, Heading } from '@chakra-ui/react'

export const Header = () => {
  return (
    <>
      <Box
        w="500px"
        p={4}
        borderBottom="1px"
        borderBottomColor="#d3d6da"
        color="black"
        align="center"
      >
        <Heading>WORDLE</Heading>
      </Box>
    </>
  );
}
