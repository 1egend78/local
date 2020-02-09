import React from 'react';
import Button from './core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Country extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: '',
        capital: '',
        flag: '',
        population: 0,
        region: ''
      };
      this.changeLanguage = this.changeLanguage.bind (this);
    }
    
  componentDidMount (){
    //console.log('componentDidmount Called');
    this.changeLanguage('france');
  }
    
  changeLanguage (cname){
      console.log('Change Language Called');
      fetch('https://restcountries.eu/rest/v2/name/'+cname)
      .then(res => res.json())
      .then(json => {
          this.setState({
              name: json[0].name,
              capital: json[0].capital,
              flag: json[0].flag,
              population: json[0].population,
              region: json[0].region
          });
      });
  }

  render () {
    return (
        <div className = 'container-fluid'>
            <Button onClickFn = {() => this.changeLanguage('france')} children="France"><img src="https://restcountries.eu/data/fra.svg" height="16" width="24" alt="" /></Button>
            <Button onClickFn = {() => this.changeLanguage('brazil')} children="Brazil"><img src="https://restcountries.eu/data/bra.svg" height="16" width="24" alt ="" /></Button>
            <Button onClickFn = {() => this.changeLanguage('croatia')} children="Croatia"><img src="https://restcountries.eu/data/hrv.svg" height="16" width="24" alt="" /></Button>
            <p>{this.state.name}</p>
            <p>{this.state.capital}</p>
            <img src={this.state.flag} height="200" width="400" alt="" />
            <p>{this.state.region}</p>
        </div>
    );
  }
}
export default Country;