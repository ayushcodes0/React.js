import React, { useState } from 'react'

const UsingUseState = () => {

    const [movie, setmovie] = useState({
        title: "Bahubali",
        rating: 9
    })

    const updateRating = ()=>{
        const copyMovie={
            ...movie,
            rating: movie.rating + 1
        }
        setmovie(copyMovie);
    }
    

  return (
    <div>
      <h3>title: {movie.title}</h3>
      <p>rating: {movie.rating}</p>
      <button onClick={updateRating}>Update Rating</button>
    </div>
  )
}

export default UsingUseState
