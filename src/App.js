import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import "./index.css"


export default function App(){
    let places = data.map(place => {
        return (
            <Card 
            key={place.id}
            place={place}
            />
        )
    })

    return(
        <div>
        <Navbar />
        {places}
        </div>
    )
    
    
}