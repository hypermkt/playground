import { Box, SimpleGrid } from '@chakra-ui/react'
import { Board } from '../Board';

import { useSelector } from 'react-redux';

export const BoardContainer = () => {
  const words1 = useSelector((state) => state.words[0]);

  return (
    <>
      <Box w="100%" p={4}>
        <SimpleGrid columns={5} spacing={3}>
          <Board character={words1[0]} />
          <Board character={words1[1]} />
          <Board character={words1[2]} />
          <Board character={words1[3]} />
          <Board character={words1[4]} />

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