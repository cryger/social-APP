import React from 'react'
import { PostData } from '../../Data/PostsData'
import { Post } from '../Post/Post'

export const Posts = () => {
  return (
    <div className="Posts">
        {PostData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}
