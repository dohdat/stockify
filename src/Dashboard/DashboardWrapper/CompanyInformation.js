import React, {Component} from 'react';
import NavStock from './NavStock';
import '../../css/EachStock.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
let arrayData = [];
class CompanyInformation extends Component {
	constructor(props){
        super(props)

    }
    render(){
		arrayData = this.props.location.state;
		console.log("this is in CompanyInformation "+arrayData.Revenue);
        return(
			<div>
				{/* <h5 className ="title">{arrayData.Name}</h5> */}
				<NavStock { ...arrayData}></NavStock>
		        <div id = "group1">
		            <h5>Company Profile</h5>
                    <div></div>


					<Container>
						<Row>
							<Col id = "bold-text">Business Description</Col>
							<Col xs lg="2" id = "bold-text">Sector</Col>
							<Col xs lg="2" id = "bold-text">Industry</Col>
						</Row>
						<div></div>
						<Row>
							<Col xs lg="2">{arrayData.BusinessDescriptor}</Col>
							<Col xs lg="2">{arrayData.Sector}</Col>
							<Col xs lg="2">{arrayData.Industry}</Col>
						</Row>
					</Container>

		            
		        </div>
	        </div>

        );
    }
}
export default CompanyInformation;