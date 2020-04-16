import React from 'react'
import styled from 'styled-components';
import { AppContext } from "../App/AppProvider";
import {fontSize1, blueBoxShadow, myBoxShadow} from "../Shared/Styles";
import {Link} from 'react-router-dom';

const ConfirmButtonStyled = styled.div`
    background: linear-gradient(to right ,#2b5876, #4e4376);
    boxshadow: myBoxShadow;
    margin: 20px;
    color: white;
    ${fontSize1}
    height: 100;
    padding: 0 30px;
    cursor: pointer
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`


export default function () {
    return (
        <Link to= {{pathname: "/Quote"}}>
        <AppContext.Consumer>
            {
                ({ confirmFavorites }) =>
                    <CenterDiv>
                        <ConfirmButtonStyled onClick={confirmFavorites}>
                            Confirm Favorites
                        </ConfirmButtonStyled >
                    </CenterDiv>
            }
        </AppContext.Consumer>
        </Link>
    )
}