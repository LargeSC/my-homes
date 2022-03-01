import React from "react"
import ReactDOM from "react-dom"
import data from "../data"


export default function Card(props){
    return(
        <div className="card">
                <img src={props.place.imageUrl} className="card--img" />
            <div className="card--main">
                <div className="inline">
                    <img src="../images/Mapicon2.png" className="card--icon" />
                    <h5 className="card--country">{props.place.location}</h5>
                    <a href={props.place.googleMapsUrl}>View on Google Maps</a>
                </div>    
                <h1 className="card--location">{props.place.title}</h1>
                <div className="inline">
                    <h4 className="card--dates">{props.place.startDate} -</h4>
                    <h4 className="card--dates">{props.place.endDate}</h4>    
                </div>
                <p className="card--text">{props.place.description}</p>    
            </div>
        </div>    
    )
}