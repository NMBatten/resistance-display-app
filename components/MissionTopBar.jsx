import { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionTopBar = ({ setCurrentMission, currentMission }) => {
    const [missions, setMissions] = useState([]);

    const fetchMissions = () => {
        setMissions(gameObject.getMissions());
    }

    useEffect(() => {
        fetchMissions();
    }, [currentMission])

    const handlePress = (missionID) => {
        if (currentMission != missionID) {
            setCurrentMission(missionID);
        }
    }

    return (
        <View style={[styles.topBarContainer, styles.messageContainer]}>
            {missions.map((element) => {
                return (
                    <Button
                        style={{paddingBottom: 5}}
                        title={`M${element[0]} P${element[1]} F${element[2]}`}
                        color={element[3] === "Pass" ? styles.colors.BLUE : element[3] === "Fail" ? styles.colors.RED : styles.colors.YELLOW}
                        onPress={() => handlePress(element[0])}
                        key={element[0]}
                    />
                )
            })}
        </View>
    )
}

export default MissionTopBar;
