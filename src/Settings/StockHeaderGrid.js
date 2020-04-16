import React from 'react';
import styled from "styled-components";
import {DeletableTile} from "../Shared/Tile";

export const StockHeaderGridStyled = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const StockSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none; 
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;
// const StyledDiv = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// `

export default function ({name, ticker, topSection}) {
  return <StockHeaderGridStyled>
    <div>{ticker}</div>
    {topSection ? (
    <DeleteIcon> X </DeleteIcon>
    ): ( 
      <StockSymbol> {name} </StockSymbol>
    )}
  </StockHeaderGridStyled>;
}

// export default function ({name, symbol, topSection}) {
//   return <CoinHeaderGridStyled>
//     <div> {name} </div>
//     {topSection ? (
//       <DeleteIcon> X </DeleteIcon>
//     ) : (
//       <CoinSymbol> {symbol} </CoinSymbol>
//     )}
//   </CoinHeaderGridStyled>;
// }