import React from 'react';
import styled from 'styled-components'
import { AppContext } from "../App/AppProvider";

const Myh1 = styled.h2`
    color: #34495E;
`


export default function ({ firstVisit }) {
    return (
        <AppContext.Consumer>
            {
                ({ firstVisit }) => firstVisit ?
            <Myh1>Welcome to STOCKIFY, please select your favorite stocks to begin.{' '}</Myh1>
            : null
            }
        </AppContext.Consumer>
    )
}

