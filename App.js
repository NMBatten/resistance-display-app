import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrienatation from 'expo-screen-orientation';
import MissionTopBar from './components/MissionTopBar';
// import Orientation from 'react-native-orientation';

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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f2e',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
