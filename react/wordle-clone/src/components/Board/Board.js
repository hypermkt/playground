import { Square, Text } from '@chakra-ui/react'
import styled, { css } from "styled-components"

export const Board = (props) => {
  return (
    <>
      <WrappedSqure $mode={props.mode} size="90px" border="2px" borderColor="#d3d6da">
        <Text fontSize="6xl">{props.character}</Text>
      </WrappedSqure>
    </>
  )
}

const WrappedSqure = styled(Square)`
  ${(props) => {
    switch (props.$mode) {
      case "normal":
        return css`
          color: black;
          background: white;
        `;

      case "wrong":
        return css`
          color: white;
          background: #a9a9a9;
        `;

      case "currect":
        return css`
          color: white;
          background: #538d4e;
        `;

      case "near":
        return css`
          color: white;
          background: #c9b458;
        `;
      default: 
        return css`
        color: black;
        background: white;
      `;
    }
  }}
`;