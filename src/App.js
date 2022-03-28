
import React from 'react';
import Axios from 'axios';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar.js';

class App extends React.Component{

  //state
  state = {
    coords:{
      latitude:44,
      longitude:50
    },
    data:{},
    inputData:""
  }
  
  componentDidMount(){
    
    //uzmi lokaciju gde se nalazi uredjaj
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((lokacija) =>{// 
        let newCoords = {
          latitude: lokacija.coords.latitude,
          longitude: lokacija.coords.longitude
        }

        this.setState({coords:newCoords});

        //API call 
        Axios.get(`http://api.weatherstack.com/current?access_key=9c5a00bb7d049ccb5debceb2b35b9033&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res =>{
          
          let vremeSadrzaj = {
            location:res.data.location.name,
            region:res.data.location.region,
            country:res.data.location.country,
            temperature:res.data.current.temperature,
            description:res.data.current.weather_descriptions[0],
            wind_speed:res.data.current.wind_speed,
            pressure:res.data.current.pressure,
            precip:res.data.current.precip,
            humidity:res.data.current.humidity,
            cloudcover:res.data.current.cloudcover
          }

          this.setState({data:vremeSadrzaj})
        })
      })
    }else{
    }

  }


change = (grad) => {
  this.setState({inputData:grad})
}

changeWeather = (event) => {
  event.preventDefault();

  //api call
  Axios.get(`http://api.weatherstack.com/current?access_key=9c5a00bb7d049ccb5debceb2b35b9033&query=${this.state.inputData}`).then(res => {
    
    let vremeSadrzaj = {
      location:res.data.location.name,
      region:res.data.location.region,
      country:res.data.location.country,
      temperature:res.data.current.temperature,
      description:res.data.current.weather_descriptions[0],
      wind_speed:res.data.current.wind_speed,
      pressure:res.data.current.pressure,
      precip:res.data.current.precip,
      humidity:res.data.current.humidity,
      cloudcover:res.data.current.cloudcover
    }

    this.setState({data:vremeSadrzaj})
  });
  
}

render() {
  return (
    <div className={(this.state.data!="undefined") ? ((this.state.data.temperature>29) ? 'App toplo' : ((this.state.data.temperature>10) ? 'App'  : 'App hladno')) : 'App' }>
      <div className="container">
      <Navbar changeWeather ={this.changeWeather} changeRegion= {this.change}/>
      <DisplayWeather weatherData = {this.state.data} />
      </div>

    </div>
  );
}
}

export default App;
