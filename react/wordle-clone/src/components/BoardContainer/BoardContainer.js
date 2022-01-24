import { Box, SimpleGrid } from '@chakra-ui/react'
import { Board } from '../Board';

export const BoardContainer = () => {
  return (
    <>
      <Box w="100%" p={4}>
        <SimpleGrid columns={5} spacing={3}>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />

          <Board />
          <Board />
          <Board />
          <Board />
          <Board />

          <Board />
          <Board />
          <Board />
          <Board />
          <Board />

          <Board />
          <Board />
          <Board />
          <Board />
          <Board />

          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </SimpleGrid>
      </Box>
    </>
  );
}