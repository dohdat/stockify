import React from 'react';
import {AppContext} from "../App/AppProvider";
import styled, {css} from 'styled-components';

//marign: auto, display block => center the image
const StockImage = styled.img`
    height: 50px;
    max-width: 110px;
    object-fit: contain;
    ${props => props.spotlight && css`
        height: 100px;
        max-width: 300px;
        object-fit: contain;
        margin: auto;
        display: block
    `}
`
export default function ({stock, spotlight}) {
    return <StockImage
        spotlight={spotlight}
        alt={stock.Ticker}
        src={stock.ImageUrl}
    />;
}