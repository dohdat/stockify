import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import StockGrid from './StockGrid';
import Search from './Search';

export default function (){
    return <Page name="settings">
        <WelcomeMessage />
        <StockGrid topSection />
        <ConfirmButton/>
        <Search />
        <StockGrid/>
    </Page>
}