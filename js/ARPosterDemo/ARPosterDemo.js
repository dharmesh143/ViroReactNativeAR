
import React, { Component } from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroImage,
  ViroVideo,
  ViroMaterials,
  ViroARTrackingTargets,
} from 'react-viro';

var createReactClass = require('create-react-class');

var ARPosterDemo = createReactClass({
    render: function() {
        return (
            <ViroARScene>
                <ViroARImageMarker target={"logo"}  >
                    <ViroVideo source={require('./res/review_00000_1.mp4')} loop={true} rotation={[-90, -180, 0]} position={[0, .3, 0]} scale={[.2, .2, .9]} materials={["chromaKeyFilteredVideo"]} />
                    <ViroImage source={require('./res/Background_2678x1237.png')}  rotation={[-90, -180, 0]} position={[0, .1, 0]}   scale={[.2, .2, .9]}  />
                </ViroARImageMarker>
            </ViroARScene>
        );
     },
 });

ViroMaterials.createMaterials({
  chromaKeyFilteredVideo : {
    chromaKeyFilteringColor: "#00FF00"
  },
});
ViroARTrackingTargets.createTargets({
  logo : {
    source : require('./res/blackpanther.jpg'),
    orientation : "Down",
    physicalWidth : 0.1200  // real world width in meters
  }
});
module.exports = ARPosterDemo;