import React from 'react'

const AlbumCard = (props) => {
  return (
    <div style={{border:'1px solid black', backgroundColor:'wheat'}}>
      <h2>{props.id} : {props.title}</h2>
    </div>
  )
}

export default AlbumCard
