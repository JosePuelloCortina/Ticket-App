import React from 'react'
import ReactPlayer from 'react-player';

function Reproductor({videoURL}) {
  return (
    <div >
        <ReactPlayer url={videoURL}
            width={800}
            height={500}
            controls   
        />
    </div>
  )
}

export default Reproductor;