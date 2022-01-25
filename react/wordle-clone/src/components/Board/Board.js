import { Square, Text } from '@chakra-ui/react'

export const Board = (props) => {
  return (
    <>
      <Square size="90px" border="2px" borderColor="#d3d6da">
        <Text fontSize="6xl">{props.character}</Text>
      </Square>
    </>
  )
}