import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Table from 'react-bootstrap/table';

class KeyMetric extends Component {
    constructor (props) {
        super(props);
        console.log(this.props);

    }
    render (){
        let variable = this.props;
        return(
        <div>
            <h5  id ="title">Key Metric</h5>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th> Moat </th>
                        <th> No.of Fund owning </th>
                        <th> Shape Ratio </th> 
                        <th> Market Cap </th>
                        <th> Sector </th> 
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{variable.Moat}</td>
                    <td> {variable.Funds}</td>
                    <td> {variable.ShapeRatio}</td>
                    <td> {variable.MarketCap}</td>
                    <td> {variable.Sector}</td>
                </tr>
                <tr>
                    <th> Price/Sales </th>
                    <th> Price/Earnings </th>
                    <th> Forward P/E </th> 
                    <th> Price/Book </th>
                    <th> PEG Ratio </th>
                </tr>
                <tr>
                    <td> {variable.PriceSales}</td>
                    <td> {variable.PriceEarnings}</td>
                    <td> {variable.ForwardPE}</td>
                    <td> {variable.PriceBook}</td>
                    <td> {variable.PEGRatio}</td>
                </tr>
                <tr>
                    <th> Rev 3-Yr Growth </th>
                    <th> ROE % </th>
                    <th> Operating Margin </th> 
                    <th> Div Yield </th>
                    <th> Current Ratio </th> 
                </tr>
                <tr>
                    <td> {variable.Rev3YrGrowth}</td>
                    <td> {variable.ROE}</td>
                    <td> {variable.OperatingMargin}</td>
                    <td> {variable.DIVYield}</td>
                    <td> {variable.CurrentRatio}</td>

                </tr>
              </tbody>
            </Table>
        </div>
      );
    }
}
export default KeyMetric;