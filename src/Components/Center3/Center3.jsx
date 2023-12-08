import React from 'react'
import "./Center3.css"
const Center3 = () => {
  return (
    <div className='center3'>
          <hr/>
          <div className="c3-textbox">
            <div className="c3-txt1">Watch everywhere</div>
            <div class="video2">
          <video video width="400" loop>
            <source src="src/Components/Center3/stranger.mp4" />
          </video></div>
          <img className='c3-img1' src="src/Image/itv.png"  />
          <div className="c3-txt2">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
          </div>
    </div>
  )
}

export default Center3