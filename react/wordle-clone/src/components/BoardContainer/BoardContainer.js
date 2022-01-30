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
          <Board character={words1[0]} mode={'normal'} />
          <Board character={words1[1]} mode={'wrong'} />
          <Board character={words1[2]} mode={'currect'} />
          <Board character={words1[3]} mode={'near'} />
          <Board character={words1[4]} mode={'normal'} />

          <Board character={words2[0]} mode={'normal'} />
          <Board character={words2[1]} mode={'normal'} />
          <Board character={words2[2]} mode={'normal'} />
          <Board character={words2[3]} mode={'normal'} />
          <Board character={words2[4]} mode={'normal'} />

          <Board character={words3[0]} mode={'normal'} />
          <Board character={words3[1]} mode={'normal'} />
          <Board character={words3[2]} mode={'normal'} />
          <Board character={words3[3]} mode={'normal'} />
          <Board character={words3[4]} mode={'normal'} />

          <Board character={words4[0]} mode={'normal'} />
          <Board character={words4[1]} mode={'normal'} />
          <Board character={words4[2]} mode={'normal'} />
          <Board character={words4[3]} mode={'normal'} />
          <Board character={words4[4]} mode={'normal'} />

          <Board character={words5[0]} mode={'normal'} />
          <Board character={words5[1]} mode={'normal'} />
          <Board character={words5[2]} mode={'normal'} />
          <Board character={words5[3]} mode={'normal'} />
          <Board character={words5[4]} mode={'normal'} />
        </SimpleGrid>
      </Box>
    </>
  );
}