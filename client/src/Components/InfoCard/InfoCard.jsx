import React from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"
export const InfoCard = () => {
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Your Info</h4>
            <UilPen width= "2rem" height= "1.2rem" />
        </div>
        <div className="info">
            <span><b>Status: </b></span>
            <span>Learning</span>
        </div>
        <div className="info">
            <span><b>Lives in: </b></span>
            <span>Ardakan</span>
        </div>
        <div className="info">
            <span><b>Works at: </b></span>
            <span>No where</span>
        </div>
        <button className='button' id= "logout-button">Log Out</button>
    </div>
  )
}
