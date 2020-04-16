import React, {Component, Fragment} from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../css/EachStock.css';
import {Link} from 'react-router-dom';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(to right ,#2b5876, #4e4376)',
  border: '30',
  boxShadow: '0 3px 5px 2px #373B44',
  color: 'white',
  height: 35,
  padding: '0 30px',
});
let arrayData = [];
class NavStock extends Component {
    constructor(props){
        super(props)
        //arrayData = this.props;
        // path = this.props;
       
    }
    render(){
        arrayData = this.props;
        console.log( "this is data in nav" + JSON.stringify(this.props));
       return(
        <div>
            <nav className = "nav-link1">
                <ul className="nav-link2">
                    <Link to = {
                        {
                            pathname: "/Quote",
                            state: arrayData
                        }
                    }>
                    <MyButton>Quote</MyButton>
                    </Link>
                    <div></div>

                    <Link to = {
                        {
                        pathname: "/FutureGrowth",
                        state: arrayData
                        }
                    }>
                        <MyButton>Future Growth</MyButton>
                    </Link>
                    <div></div>
                    <Link to = {
                        {
                        pathname: "/Valuation",
                        state: arrayData
                        }
                    }>
                        <MyButton>Valuation</MyButton>
                    </Link>
                    <div></div>
                    <Link to = {
                        {
                        pathname: "/FinancialHealth",
                        state: arrayData
                        }
                    }>
                        <MyButton>Financial Health</MyButton>
                    </Link>
                    <div></div>
                    <Link>
                        <MyButton> Company information </MyButton>
                    </Link>
                </ul>
            </nav>


        </div>
        );
    }
}
export default NavStock;