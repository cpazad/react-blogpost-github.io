import React from 'react'
import tree from '../tree.png'

const Posts = (black) => {
    return (
        <>
            <div className="col-md-4">
                        <div className="card my-3 shadow">
                            <img src={ tree } alt="" />
                            <div className="card-body">
                                
                                <h5>Title: { black.green.title }</h5>
                                <p><em> Post Details:</em> { black.green.body }</p>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Posts
