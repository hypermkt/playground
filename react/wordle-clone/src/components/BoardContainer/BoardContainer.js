import { Box, SimpleGrid } from '@chakra-ui/react'
import { Board } from '../Board';

import { useSelector } from 'react-redux';

export const BoardContainer = () => {
  const words = useSelector((state) => state.words);

  return (
    <>
      <Box w="100%" p={4}>
        <SimpleGrid columns={5} spacing={3}>
          <Board character={words[0][0]} />
          <Board character={words[0][1]} />
          <Board character={words[0][2]} />
          <Board character={words[0][3]} />
          <Board character={words[0][4]} />

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