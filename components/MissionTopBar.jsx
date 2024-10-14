import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        <View style={[styles.topBarContainer, {}]}>
            {missions.map((element) => {
                return (
                    <TouchableOpacity onPress={() => handlePress(element[0])} key={element[0]}>
                        <View style={[{backgroundColor: element[3] === "Pass" ? styles.colors.OPAQUEBLUE : element[3] === "Fail" ? styles.colors.OPAQUERED : styles.colors.OPAQUEYELLOW, borderRadius: 5}]}>
                            <Text style={[styles.smallTitleText, {color:"black", padding: 4, margin: 4, fontSize: 20}]}>
                                {`M${element[0]} P${element[1]} F${element[2]}`}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default MissionTopBar;
