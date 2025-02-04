import React, { useState } from 'react'

const UsingUseState = () => {



    

    const [movie, setmovie] = useState({
        title: "Bahubali",
        rating: 9
    })

    const updateRating = ()=>{
        
        setmovie({...movie, rating: 2});
    }
    

  return (
    <div>
      <h3>title: {movie.title}</h3>
      <p>rating: {movie.rating}</p>
      <button onClick={updateRating}>Update Rating</button>
    </div>
  )
}

export default UsingUseState;    
