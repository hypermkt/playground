import { Center } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Header } from './components/Header';
import { BoardContainer } from './components/BoardContainer';
import { GameKeyboard } from './components/GameKeyboard';
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Container>
        <Center w="500px">
          <SimpleGrid columns={1} spacing={0}>
            <Box width="500px">
              <Header />
            </Box>
            <Box width="500px">
              <BoardContainer />
            </Box>
            <Box width="500px">
              <GameKeyboard />
            </Box>
          </SimpleGrid>
        </Center>
      </Container>
    </div>
  );
}

export default App;
