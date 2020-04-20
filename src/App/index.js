import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings'
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';
import Quote from '../Dashboard/DashboardWrapper/./Quote';
import Footer from '../Dashboard/DashboardWrapper/Footer';
import FutureGrowth from '../Dashboard/DashboardWrapper/FutureGrowth';
import Valuation from '../Dashboard/DashboardWrapper/Valuation';
import FinancialHealth from '../Dashboard/DashboardWrapper/FinancialHealth';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  // componentDidMount = () => {
  //   this.fetchStocks();
  // }

  // fetchStocks = async () => {
  //   let response = await fetch(
  //     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${alphaVantageKey}`
  //   );
  //   const data = await response.json();
  // };


  render() {
    return (
      <div style={{
          backgroundColor: 'white'
        }}
        >
        <Router>
          <AppLayout>
            <AppProvider>
              <AppBar />
              <Content>
                <Settings />
                <Dashboard />
              </Content>
            <div data-spy="scroll" >
            <Switch>
              <Route path="/" exact component={Quote} />
              <Route path="/Quote" component={Quote} />
              <Route path="/FutureGrowth" component={FutureGrowth} />
              <Route path="/Valuation" component={Valuation} />
              <Route path="/FinancialHealth" component={FinancialHealth} />
            </Switch>
            <Footer />
            </div>
          </AppProvider>
        </AppLayout>
      </Router>
    </div>
    );
    
  }
  
}

export default App;
