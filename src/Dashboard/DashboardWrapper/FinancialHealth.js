import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';
import '../../css/Stock.css';

let arrayData =[];
class Valuation extends Component {
	constructor(props){
		super(props)
	}
    render(){
		arrayData = this.props.location.state;
        return(
			<div>
				{/* <h5 className ="title">{arrayData.Name}</h5> */}
				<NavStock { ...arrayData}></NavStock>
		        <div id = "group1">
		            <h5>Financial Health</h5>
		            <h6>Ratios </h6>
		            <div id ="catergory">
		                <div> Quick Ratio </div>
		                <div> Current Ratio </div>
		                <div> Debt/Equity </div> 
		                <div> Cash/Sh</div>
						<div> {arrayData.QuickRatio}</div>
						<div> {arrayData.CurrentRatio}</div>
						<div> {arrayData.DebtEquity}</div>
						<div> {arrayData.CashSh}</div>
						
		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th>Fiscal year is Jan-Dec (USD millions)</th>
					      <th>2014</th>
					      <th>2015</th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th>Assets</th>
					      <td>{arrayData.Assets2014}</td>
					      <td>{arrayData.Assets2015}</td>
						  <td>{arrayData.Assets2016}</td>
						  <td>{arrayData.Assets2017}</td>
						  <td>{arrayData.Assets2018}</td>

					    </tr>
					    <tr>
					      <th>Assets Growth %</th>
					      <td>{arrayData.AssetsGrowth2014}</td>
						  <td>{arrayData.AssetsGrowth2015}</td>
						  <td>{arrayData.AssetsGrowth2016}</td>
						  <td>{arrayData.AssetsGrowth2017}</td>
						  <td>{arrayData.AssetsGrowth2018}</td>
					    </tr>
					    <tr>
					      <th>Liabilties</th>
					      <td>{arrayData.Liabilties2014}</td>
						  <td>{arrayData.Liabilties2015}</td>
						  <td>{arrayData.Liabilties2016}</td>
						  <td>{arrayData.Liabilties2017}</td>
						  <td>{arrayData.Liabilties2018}</td>

					    </tr>
					    <tr>
					      <th>Liabilities Growth %</th>
					      <td>{arrayData.LiabilitiesGrowth2014}</td>
						  <td>{arrayData.LiabilitiesGrowth2015}</td>
						  <td>{arrayData.LiabilitiesGrowth2016}</td>
						  <td>{arrayData.LiabilitiesGrowth2017}</td>
						  <td>{arrayData.LiabilitiesGrowth2018}</td>
					    </tr>
					    <tr>
					      <th>Total Equity</th>
					      <td>{arrayData.TotalEquity2014}</td>
						  <td>{arrayData.TotalEquity2015}</td>
						  <td>{arrayData.TotalEquity2016}</td>
						  <td>{arrayData.TotalEquity2017}</td>
						  <td>{arrayData.TotalEquity2018}</td>

					    </tr>
					    <tr>
					      <th> Shareholders' Equity Growth %</th>
					      <td>{arrayData.ShareholdersEquityGrowth2014}</td>
						  <td>{arrayData.ShareholdersEquityGrowth2015}</td>
						  <td>{arrayData.ShareholdersEquityGrowth2016}</td>
						  <td>{arrayData.ShareholdersEquityGrowth2017}</td>
						  <td>{arrayData.ShareholdersEquityGrowth2018}</td>
					    </tr>
					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default Valuation;