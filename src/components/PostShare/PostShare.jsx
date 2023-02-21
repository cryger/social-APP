import React, {useState, useRef} from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule, UilTimes} from "@iconscout/react-unicons"

export const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) =>{
        if(event.target.files && EventTarget.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
            <div>
                <input type="text"  placeholder="What's Happening "/>
                <div className="PostOptions">
                    <div className="options" style={{color: "var(--photo"}}
                    onClick={()=>imageRef.current.click()}
                    >
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
                    <button className='btnFollow ps-button'>Share</button>
                    <div style={{display:"none"}}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {image &&
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="" />
                    </div>
                }
            </div>
    </div>
    


  )
}
