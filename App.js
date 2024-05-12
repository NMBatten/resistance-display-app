import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import * as ScreenOrienatation from 'expo-screen-orientation';
import MissionTopBar from './components/MissionTopBar';
import MissionDetails from './components/MissionDetails';
import SetUp from './components/Setup';
const styles = require('./components/StyleSheet');
const gameObject = require('./components/GameLogic')


export default function App() {
  // Locking the app in landscape orientation, should only be needed in dev testing as once it is compiled to an APK the same
  // can be achieved by modifying the AndroidManifest.xml file
  const [orientation, setOrientation] = useState(3);
  const [currentMission, setCurrentMission ] = useState(1);
  const [setUpComplete, setSetUpComplete] = useState(false);

  useEffect(() => {
    lockOrientation();
  }, []);

  const lockOrientation = async () => {
    await ScreenOrienatation.lockAsync(
      ScreenOrienatation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrienatation.getOrientationAsync();
    setOrientation(o);
  }

  const renderTopBarAndDetails = () => {
    return (
      <>
        <View style={[styles.topBarContainer]}>
          <MissionTopBar setCurrentMission={setCurrentMission} currentMission={currentMission}/>
        </View>
        <View>
          <MissionDetails currentMission={currentMission}/>
        </View>
      </>

    )
  };

  const renderSetUp = () => {
    return (
      <SetUp dispSelf={true} setDisp={() => setSetUpComplete(true)} />
    )
  };

  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <ImageBackground source={require('./components/resources/pictures/FutureCity.jpg')} resizeMode='stretch' style={[styles.backgroundImage]}>
        {gameObject.getSetUpStatus() ? renderTopBarAndDetails() : renderSetUp()}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
