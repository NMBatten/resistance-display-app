import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionTopBar = ({ setCurrentMission }) => {
    const [missions, setMissions] = useState([]);

    const fetchMissions = () => {
        setMissions(gameObject.getMissions());
    }

    useEffect(() => {
        fetchMissions();
    }, [])

    const handlePress = (missionID) => {
        setCurrentMission(missionID);
    }

    return (
        <View style={[styles.topBarContainer, styles.messageContainer]}>
            {console.log(missions)}
            {missions.map((element) => {
                return (
                    <Button
                        title={`M${element[0]} P${element[1]} F${element[2]}`}
                        color={element.status === "Pass" ? styles.colors.BLUE : element.status === "Fail" ? styles.colors.RED : styles.colors.YELLOW}
                        onPress={() => handlePress(element[0])}
                        key={element[0]}
                    />
                )
            })}
        </View>
    )
}

export default MissionTopBar;
