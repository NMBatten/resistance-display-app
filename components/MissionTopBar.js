import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionTopBar = () => {
    const [missions, setMissions] = useState([]);

    const fetchMissions = () => {
        setMissions(gameObject.getMissions());
    }

    useEffect(() => {
        fetchMissions();
    }, [])

    const handlePress = () => {

    }

    console.log(missions)

    return (
        <View style={[styles.topBarContainer]}>
            {missions.map((element) => {
                return (
                    <Text key={element}>{element}</Text>
                )
            })}
        </View>
    )
}

export default MissionTopBar;
