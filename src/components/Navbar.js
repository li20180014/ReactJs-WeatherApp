import React from 'react'

export default function Navbar(props) {
    return (
        <div className= "row">
            <div className="col-md-6">
                <h1 className="title"><b>Vremenska Prognoza</b></h1>
            </div>

            <div className="col-md-6">
                <form className="region" onSubmit={(e) => props.changeWeather(e)}>
                    <input className="regioninput" placeholder="Unesite lokaciju" onChange={(e) => { props.changeRegion(e.target.value)}}/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

        </div>
    )
}
