import React from 'react'

function VideoCard({videoLink}) {
  return (
    <iframe className="iframe"  width="560" height="315" src={videoLink} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    
  )
}

export default VideoCard