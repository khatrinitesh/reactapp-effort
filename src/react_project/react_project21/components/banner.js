import React from 'react'

export default function Banner({bannerTitle,bannerDesc}) {
  return (
    <div className='banner_content'>
        <h3 className='bannertitle'>{bannerTitle}</h3>
        <p className='bannerDesc'>{bannerDesc}</p>
    </div>
  )
}
