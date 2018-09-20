
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');
/*
 * TODO: Add your API key below!!
 */
var apiKey = "CCCB04FB-D3A7-4862-93C9-4B8A1111A780";
var vrScenes = {}
var arScenes = {
  'ARPosterDemo' : require('./js/ARPosterDemo/ARPosterDemo.js'),
}
var showARScene = true;
var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {
    return (
        <ViroARSceneNavigator
            initialScene={{
                scene: arScenes['ARPosterDemo'],
             }}
       apiKey={apiKey} />
    );
  }
});
module.exports = ViroCodeSamplesSceneNavigator;