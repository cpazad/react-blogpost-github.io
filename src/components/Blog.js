import React, { useState, useEffect } from 'react'
import Posts from './Posts'

const Blog = () => {

    const red = [
        {            
            title: 'Boss',
            body : 'The Old Man and the Sea'
        },
        {            
            title: 'Queen',
            body : 'The Old Man and the Sea'
        },
        {            
            title: 'Politician',
            body : 'The Old Man and the Sea'
        }
    ]
// Use state 
 
    const [posts, setpost] = useState(red)

// use effect

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
        .then(data => data.json())
        .then(data => setpost(data))

    }, [])

    return (
        <>
            <div className="container my-5">
                <div className="row">
                   {
                       posts.map((blue)=><Posts green = { blue }></Posts>)
                   }
                
                </div>
            </div>
            
        </>
    )
}

export default Blog
