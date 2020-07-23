import React from 'react';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Button from './Components/core/Button';

import Card from './Components/Card_Country';

class App extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      country : "",
      reverceTab : "default",
      searchCountry : "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.reverceTab = this.reverceTab.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(this_country) {
    fetch(`https://restcountries.eu/rest/v2/name/${this_country}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        reverceTab : "default",
        country : json[0]
      });
    });
  }

  reverceTab() {    
      fetch(`https://restcountries.eu/rest/v2/region/europe`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          country : json,
          reverceTab : "search",
        });
      });
  }
  handleForm(this_form) {
    console.log(this_form) 
    this.setState({
      searchCountry : this_form,
    });
  }
  handleSubmit() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchCountry}`)
    .then(res => res.json())
    .then(json => {
      
    console.log("cliched" ,json) 
      this.setState({
        country : json
      });
    });
  }

  render() {
    return (
      <div className="text-center px-1" style={{display:"grid",width:"100%"}}>
        <h1>Country</h1>
        <div className="d-flex justify-content-between">
          <Button  
            onClick={() => this.handleClick('france')} 
            name='France'
            stylesheetClass={["btn-primary","w-100"]}
          />
          <Button  
            onClick={() => this.handleClick('brazil')} 
            name='Brazil'
            stylesheetClass={["btn-primary","w-100","mx-1"]}
          />
          <Button  
            onClick={() => this.handleClick('croatia')} 
            name='Croatia'
            stylesheetClass={["btn-primary","w-100","mr-1"]}
          />
          <Button  
            onClick={this.reverceTab} 
            name='Search'
            stylesheetClass={["btn-primary","w-100"]}
          />
        </div>
        {this.state.country !== "" ? <Card 
        reverceTab={this.state.reverceTab} 
        country={this.state.country}
        inputForm={(e) => this.handleForm(e.target.value)}
        onClick={this.handleSubmit} 
        /> : "Choose action"}
      </div>
    );
  }
}

export default App;