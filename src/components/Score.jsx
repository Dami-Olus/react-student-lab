import React from 'react'

function Score({scores}) {
  return (
    <div>
      {scores.map(score => (
        <div>
          <p>{score.date}</p>
          <p>{score.score}</p>
        </div>
      ))}
    </div>
  )
}

export default Score