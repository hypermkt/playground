import { Button } from '@chakra-ui/react'

export const KeyboardButton = (props) => {
  return (
    <>
      <Button backgroundColor="#d3d6da" width="43px" height="58px" marginBottom="2">
        {props.character}
      </Button>
    </>
  );
}