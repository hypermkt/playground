import { Box, SimpleGrid } from '@chakra-ui/react'
import { Board } from '../Board';

import { useSelector } from 'react-redux';

export const BoardContainer = () => {
  const words1 = useSelector((state) => state.words[0]);
  const words2 = useSelector((state) => state.words[1]);
  const words3 = useSelector((state) => state.words[2]);
  const words4 = useSelector((state) => state.words[3]);
  const words5 = useSelector((state) => state.words[4]);
  const targetWord = useSelector((state) => state.targetWord);
  const row1Validatable = useSelector((state) => state.rowValidatable[0]);
  const row2Validatable = useSelector((state) => state.rowValidatable[1]);
  const row3Validatable = useSelector((state) => state.rowValidatable[2]);
  const row4Validatable = useSelector((state) => state.rowValidatable[3]);
  const row5Validatable = useSelector((state) => state.rowValidatable[4]);


  const makeMode = (column, character, validatable) => {
    if (!validatable) {
      return 'normal'
    }

    const char = targetWord[column]
    if (char === character) {
      return 'currect'
    }

    if (targetWord.includes(character)) {
      return 'near'
    }

    return 'wrong'
  }

  return (
    <>
      <Box w="100%" p={4}>
        <SimpleGrid columns={5} spacing={3}>
          <Board character={words1[0]} mode={makeMode(0, words1[0], row1Validatable)}  />
          <Board character={words1[1]} mode={makeMode(1, words1[1], row1Validatable)} />
          <Board character={words1[2]} mode={makeMode(2, words1[2], row1Validatable)} />
          <Board character={words1[3]} mode={makeMode(3, words1[3], row1Validatable)} />
          <Board character={words1[4]} mode={makeMode(4, words1[4], row1Validatable)} />

          <Board character={words2[0]} mode={makeMode(0, words2[0], row2Validatable)} />
          <Board character={words2[1]} mode={makeMode(1, words2[1], row2Validatable)} />
          <Board character={words2[2]} mode={makeMode(2, words2[2], row2Validatable)} />
          <Board character={words2[3]} mode={makeMode(3, words2[3], row2Validatable)} />
          <Board character={words2[4]} mode={makeMode(4, words2[4], row2Validatable)} />

          <Board character={words3[0]} mode={makeMode(0, words3[0], row3Validatable)} />
          <Board character={words3[1]} mode={makeMode(1, words3[1], row3Validatable)} />
          <Board character={words3[2]} mode={makeMode(2, words3[2], row3Validatable)} />
          <Board character={words3[3]} mode={makeMode(3, words3[3], row3Validatable)} />
          <Board character={words3[4]} mode={makeMode(4, words3[4], row3Validatable)} />

          <Board character={words4[0]} mode={makeMode(0, words4[0], row4Validatable)} />
          <Board character={words4[1]} mode={makeMode(1, words4[1], row4Validatable)} />
          <Board character={words4[2]} mode={makeMode(2, words4[2], row4Validatable)} />
          <Board character={words4[3]} mode={makeMode(3, words4[3], row4Validatable)} />
          <Board character={words4[4]} mode={makeMode(4, words4[4], row4Validatable)} />

          <Board character={words5[0]} mode={makeMode(0, words5[0], row5Validatable)} />
          <Board character={words5[1]} mode={makeMode(1, words5[1], row5Validatable)} />
          <Board character={words5[2]} mode={makeMode(2, words5[2], row5Validatable)} />
          <Board character={words5[3]} mode={makeMode(3, words5[3], row5Validatable)} />
          <Board character={words5[4]} mode={makeMode(4, words5[4], row5Validatable)} />
        </SimpleGrid>
      </Box>
    </>
  );
}