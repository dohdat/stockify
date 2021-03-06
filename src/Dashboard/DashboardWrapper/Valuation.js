import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';
import '../../css/Stock.css';

let arrayData = [];
class Valuation extends Component {
	constructor(props){
		super(props)
	}
    render(){
		arrayData= this.props.location.state;
        return(
			<div>
				{/* <h5 className ="title">{arrayData.Name}</h5> */}
				<NavStock {...arrayData}> </NavStock>
		        <div id = "group1">
		            <h5>Valuation</h5>
		            <h6>Ratios </h6>
		            <div id ="catergory1">
		                <div> Fair Price </div>
		                <div> Dividend Yield % </div>
		                <div> Price/Sales </div> 
		                <div> Price/Earnings</div>
		                <div> Price/Forward Earnings</div> 
						<div> {arrayData.FairPrice}</div>
						<div> {arrayData.DividendYieldPercent}</div>
						<div> {arrayData.PriceSales}</div>
						<div> {arrayData.PriceEarnings}</div>
						<div> {arrayData.PriceForwardEarnings}</div>

		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th>Year</th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
						  <th> Current </th>
						  <th> Industry </th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th>Price/Earnings</th>
					      <td>{arrayData.PriceEarnings2016}</td>
					      <td>{arrayData.PriceEarnings2017}</td>
						  <td>{arrayData.PriceEarnings2018}</td>
						  <td>{arrayData.PriceEarningsCurrent}</td>
						  <td>{arrayData.PriceEarningsIndustry}</td>
					    </tr>
					    <tr>
					      <th>Price/Sales</th>
					      <td>{arrayData.PriceSales2016}</td>
						  <td>{arrayData.PriceSales2017}</td>
						  <td>{arrayData.PriceSales2018}</td>
						  <td>{arrayData.PriceSales_Current}</td>
						  <td>{arrayData.PriceSales_Industry}</td>

					    </tr>
					    <tr>
					      <th>Return On Assets %</th>
					      <td>{arrayData.ROA2016}</td>
						  <td>{arrayData.ROA2017}</td>
						  <td>{arrayData.ROA2018}</td>
						  <td>{arrayData.ROA_Current}</td>
						  <td>{arrayData.ROA_Industry}</td>
					    </tr>
					    <tr>
					      <th>Return On Equity %</th>
					      <td>{arrayData.ROE2016}</td>
						  <td>{arrayData.ROE2017}</td>
						  <td>{arrayData.ROE2018}</td>
						  <td>{arrayData.ROE_Current}</td>
						  <td>{arrayData.ROE_Industry}</td>
					    </tr>
					    <tr>
					      <th>Gross Margins</th>
					      <td>{arrayData.GrossMargin2016}</td>
						  <td>{arrayData.GrossMargin2017}</td>
						  <td>{arrayData.GrossMargin2018}</td>
						  <td>{arrayData.GrossMarginCurrent}</td>
						  <td>{arrayData.GrossMarginIndustry}</td>
					    </tr>
					    <tr>
					      <th> Operating Margin %</th>
					      <td>{arrayData.OperatingMargin2016}</td>
					      <td>{arrayData.OperatingMargin2017}</td>
						  <td>{arrayData.OperatingMargin2018}</td>
						  <td>{arrayData.OperatingMarginCurrent}</td>
						  <td>{arrayData.OperatingMarginIndustry}</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default Valuation;