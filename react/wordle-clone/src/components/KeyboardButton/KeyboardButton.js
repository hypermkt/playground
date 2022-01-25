import { Button } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { inputWord } from '../../redux/action/keyboard.action';

export const KeyboardButton = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
      backgroundColor="#d3d6da"
      width="43px"
      height="58px"
      marginBottom="2"
      onClick={() => dispatch(inputWord(props.character))}
      >
        {props.character}
      </Button>
    </>
  );
}