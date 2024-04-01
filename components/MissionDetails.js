import { Text, View, Button } from 'react-native';
const styles = require('./StyleSheet');

const MissionDetails = ({ currentMission }) => {


    return (
        <View>
            <Text>This is the Mission Details Page</Text>
            <Text>{`mission ${currentMission}`}</Text>
        </View>
    )
}

export default MissionDetails;
