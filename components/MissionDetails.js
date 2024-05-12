import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
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
        <View>
            <View>
                <View>
                    <Text>These are the details: {details.numTeam} {details.numFails}</Text>
                </View>
            </View>
            <Text>This is the Mission Details Page</Text>
            <Text>{`mission ${currentMission}`}</Text>
        </View>
    )
}

export default MissionDetails;
