import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as ScreenOrienatation from 'expo-screen-orientation';
import MissionTopBar from './components/MissionTopBar';
import MissionDetails from './components/MissionDetails';
const styles = require('./components/StyleSheet');


export default function App() {
  // Locking the app in landscape orientation, should only be needed in dev testing as once it is compiled to an APK the same
  // can be achieved by modifying the AndroidManifest.xml file
  const [orientation, setOrientation] = useState(3);

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


  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <MissionTopBar/>
      <MissionDetails/>
      <StatusBar style="auto" />
    </View>
  );
}
