import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from '@rneui/themed';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionDetails = ({ currentMission }) => {
    const [details, setDetails] = useState([]);
    const [isActive, setIsActive] = useState(true);

    const getMission = (currentMission) => {
        const data = gameObject.getMissionDetails(currentMission);
        setDetails(data);
    };

    useEffect(() => {
        getMission(currentMission);
        // Once we set up
        // if (currentMission === gameObject.getActiveMission) {
        //     setIsActive(true)
        // } else {
        //     setIsActive(false)
        // }
    }, [currentMission]);

    console.log("Details: ", details);

    return (
        <>
            <View style={[styles.detailsContainer]}>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <Text>These are the details: {details.numTeam} {details.numFails}</Text>
                    </View>
                </View>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <Text>This will contain the input buttons</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.topBarContainer, styles.messageContainer]}>

            </View>
        </>
    )
}

export default MissionDetails;
