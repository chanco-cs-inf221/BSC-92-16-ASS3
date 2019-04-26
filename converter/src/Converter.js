import React, { Component } from 'react';
import logo from './img/logo.png';
import  Header from './Header/Header';
import SideDrawer from './Header/SideDrawer';
import Backdrop from './Header/Backdrop';

class Converter extends Component {
  
 state ={
  currencies: ['USD', 'AUD', 'RUB', 'PHP', 'EUR', 'JPY', 'GBP','NZD', 'CNY'],
  base: 'EUR',
  amount: '',
  convertTo: 'USD',
  results: '',
  date: '',
  sideDrawerOpen: false,
 };

 handleSelect = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    results: null,
  },
   this.calculate
  );
 };
  
handleInput = e => { 
  this.setState({
    amount: e.target.value,
    results: null,
  },
   this.calculate
  );
}; 

calculate = () => {
  const amount = this.state.amount;
  if(amount === isNaN) {
    return;
  }
  else {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
   .then(res => res.json()) 
   .then(data => {
    const  date  = data.date;
    const  results = (data.rates[this.state.convertTo] * amount).toFixed(4);
    this.setState({
      results,
       date
    });
   });

  }
};

handleSwap = (e) => {
  const base = this.state.base
  const convertTo = this.state.convertTo
  e.preventDefault();
  this.setState({
    convertTo: base, base: convertTo,
    results: null
  },
   this.calculate
  );
}; 

drawerSideClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
  });
};

backdropClickHandler = () => {
     this.setState({sideDrawerOpen: false});
};
render() {

    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    const {currencies, base, amount, convertTo, results, date} = this.state
    return (
     <div>
      <Header drawerClickHandler={this.drawerSideClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <div className="container">
      <header>
       <img src={logo} className="App-logo" alt="logo" />
       <h1>Currency Converter App</h1>
       </header>

        <div className="row">
          <div className="col-lg-6 mx-auto">
             <div className="card ">
          
          <h3>
              {amount} {base} is equevalent to
          </h3>
          <h2> 
              {results == null ? "Calculating..." : results} {convertTo}
          </h2>
          <p>As of {date}</p>
          <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10">
                 <form className="form-inline mb-4">
                   <input
                    type="number"
                    value={amount}
                    onChange={this.handleInput}

                    className="form-control form-control-lg mx-3"/>
                   <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect} 
                     className="form-control form-control-lg">
                      {currencies.map(currency =>
                        <option 
                          key={currency}
                          value={currency}
                        >{currency}</option>
                        )}
                   </select>
                 </form>

                 <form className="form-inline mb-4">
                   <input 
                    disabled={true}
                    value={
                      results === null ?'Calculating...' : results}
                    className="form-control form-control-lg mx-3"/>
                    <select 
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg">
                        {currencies.map(currency =>
                        <option 
                          key={currency}
                          value={currency}
                        >{currency}</option>
                        )}
                   </select>
                 </form>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                <h1 onClick={this.handleSwap} className="swap">&#8595;&#8593;</h1>
              </div>
          </div>
      </div>  

          </div>
        </div>

        <footer>
     <picture>TimbarNest, copyright &copy; 2019</picture>
     <h6>Developed by:</h6>
     <h5>Solomon Piethans satoh </h5>
     </footer>
      </div>
    </div>   
     )  
  }
}

export default Converter;
