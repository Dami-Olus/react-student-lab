import React from 'react'

function Score({scores}) {
  return (
    <div>
      {scores.map(score => (
        <div>
          <p>{score.date} - <strong>{score.score}</strong> </p>
          
        </div>
      ))}
    </div>
  )
}

export default Score