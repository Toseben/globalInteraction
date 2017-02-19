import React from 'react'
import {Scene, Entity} from 'aframe-react';
import Users from '../components/Users'
import Earth from '../components/Earth'

class Global extends React.Component {

  render() {
    const {userData} = this.props;

    return(
      <Scene>
        <Entity
          id="camera"
          camera
          position="0 1 4"
          orbit-controls="
            autoRotate: false;
            target: #earth_GEO;
            enableDamping: true;
            dampingFactor: 0.125;
            rotateSpeed: 0.25;
            minDistance: 2.5;
            maxDistance: 5;
            enableKeys: false"
          >
        </Entity>

        <a-sky color="#ECECEC"></a-sky>
        <Users userData={userData}/>
        <Earth/>
      </Scene>
    )
  }
}

export default Global;
