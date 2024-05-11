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
    }, []);

    console.log("Details: ", details);

    return (
        <View>
            <View style={[styles.detailsContainer, styles.messageContainer]}>
                <View style={[styles.innerDetailContainer]}>
                    <Text>These are the details:</Text>
                </View>
            </View>
            <Text>This is the Mission Details Page</Text>
            <Text>{`mission ${currentMission}`}</Text>
        </View>
    )
}

export default MissionDetails;
