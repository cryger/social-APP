import React from 'react'
import {UilPen} from '@iconscout/react-unicons'
import './InfoCard.css'

export const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <UilPen/>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span> In Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span> Multan</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span> Digital Code Group</span>
        </div>

        <button className='btnFollow logout-button'>Logout</button>
    </div>
  )
}
