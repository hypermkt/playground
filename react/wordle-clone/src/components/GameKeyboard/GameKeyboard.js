import { useDispatch } from "react-redux";
import { KeyboardButton } from '../KeyboardButton';
import { SimpleGrid, IconButton, Button } from '@chakra-ui/react';
import { FiDelete } from "react-icons/fi";
import { deleteWord, goNextRow } from '../../redux/action/keyboard.action';

export const GameKeyboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SimpleGrid columns={10} spacing={2}>
        <KeyboardButton character={"Q"} />
        <KeyboardButton character={"W"} />
        <KeyboardButton character={"E"} />
        <KeyboardButton character={"R"} />
        <KeyboardButton character={"T"} />
        <KeyboardButton character={"Y"} />
        <KeyboardButton character={"U"} />
        <KeyboardButton character={"I"} />
        <KeyboardButton character={"O"} />
        <KeyboardButton character={"P"} />
      </SimpleGrid>

      <SimpleGrid columns={9} spacing={2} marginLeft="20px" marginRight="20px">
        <KeyboardButton character={"A"} />
        <KeyboardButton character={"S"} />
        <KeyboardButton character={"D"} />
        <KeyboardButton character={"F"} />
        <KeyboardButton character={"G"} />
        <KeyboardButton character={"H"} />
        <KeyboardButton character={"J"} />
        <KeyboardButton character={"K"} />
        <KeyboardButton character={"L"} />
      </SimpleGrid>

      <SimpleGrid columns={9} spacing={2}>
        <Button
          backgroundColor="#d3d6da"
          width="43px"
          height="58px"
          marginBottom="2"
          onClick={() => dispatch(goNextRow())}
        >
          Enter
        </Button>

        <KeyboardButton character={"Z"} />
        <KeyboardButton character={"X"} />
        <KeyboardButton character={"C"} />
        <KeyboardButton character={"V"} />
        <KeyboardButton character={"B"} />
        <KeyboardButton character={"N"} />
        <KeyboardButton character={"M"} />

        <IconButton
          backgroundColor="#d3d6da"
          height="58px"
          icon={<FiDelete />}
          onClick={() => dispatch(deleteWord())}
        />
      </SimpleGrid>
    </>
  );
};