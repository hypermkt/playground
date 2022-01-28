import { Box, SimpleGrid } from '@chakra-ui/react'
import { Board } from '../Board';

import { useSelector } from 'react-redux';

export const BoardContainer = () => {
  const words1 = useSelector((state) => state.words[0]);
  const words2 = useSelector((state) => state.words[1]);
  const words3 = useSelector((state) => state.words[2]);
  const words4 = useSelector((state) => state.words[3]);
  const words5 = useSelector((state) => state.words[4]);

  return (
    <>
      <Box w="100%" p={4}>
        <SimpleGrid columns={5} spacing={3}>
          <Board character={words1[0]} />
          <Board character={words1[1]} />
          <Board character={words1[2]} />
          <Board character={words1[3]} />
          <Board character={words1[4]} />

          <Board character={words2[0]} />
          <Board character={words2[1]} />
          <Board character={words2[2]} />
          <Board character={words2[3]} />
          <Board character={words2[4]} />

          <Board character={words3[0]} />
          <Board character={words3[1]} />
          <Board character={words3[2]} />
          <Board character={words3[3]} />
          <Board character={words3[4]} />

          <Board character={words4[0]} />
          <Board character={words4[1]} />
          <Board character={words4[2]} />
          <Board character={words4[3]} />
          <Board character={words4[4]} />

          <Board character={words5[0]} />
          <Board character={words5[1]} />
          <Board character={words5[2]} />
          <Board character={words5[3]} />
          <Board character={words5[4]} />
        </SimpleGrid>
      </Box>
    </>
  );
}