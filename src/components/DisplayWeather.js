import React from 'react'

export default function UserLocation(props) {

    const { temperature, cloudcover, description, location, region, country, wind_speed, precip, humidity } = props.weatherData;
    
    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-5 weather-temp">
                    <h1>{temperature}<sup>o</sup>C , {description}</h1>
                    <h4>{location}</h4>
                    <p>{region} , {country}</p>
                </div>

                
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p>Vetar(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Oblačnost(%)</p>
                    <h2>{cloudcover}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Padavine(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Vlažnost(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
    )
}