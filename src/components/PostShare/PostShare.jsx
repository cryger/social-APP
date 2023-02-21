import React from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule} from "@iconscout/react-unicons"

export const PostShare = () => {
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
            <div>
                <input type="text"  placeholder="What's Happening "/>
                <div className="PostOptions">
                    <div className="options" style={{color: "var(--photo"}}>
                        <UilScenery/>
                            
                            Photo
                            
                    </div>
                    <div className="options" style={{color: "var(--video"}}>
                        <UilPlayCircle/>
                        
                            Video
                        
                    </div>
                    <div className="options" style={{color: "var(--location"}}>
                        <UilLocationPoint/>
                        
                            Location
                        
                    </div>
                    <div className="options" style={{color: "var(--schedule"}}>
                        <UilSchedule/>
                        
                            Schedule
                        
                    </div>
                </div>
            </div>
    </div>
    


  )
}
