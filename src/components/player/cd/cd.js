import React from 'react'
import './cd.scss'

const Cd = (props) => {
  const playState = true;
  return (
    <div className={playState ? 'player-cd' : 'player-cd pause'}>
      <div className="needle"/>
      <div className="disc-box">
        <div className="disc"/>
        <img src="http://p1.music.126.net/LQ2iUKlZwqGMysGkeCR4ww==/27487790697969.jpg" alt="" width="100%"
             height="100%"/>
      </div>
    </div>
  )
};

export default Cd
