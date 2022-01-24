import { Button } from '@chakra-ui/react'

export const KeyboardButton = (props) => {
  return (
    <>
      <Button colorScheme="gray" height="60px">
        {props.character}
      </Button>
    </>
  )
}