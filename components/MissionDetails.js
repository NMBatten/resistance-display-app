import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from '@rneui/themed';
import MissionTopBar from './MissionTopBar';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionDetails = ({ currentMission, setCurrentMission }) => {
    const [details, setDetails] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [currentVoteIndex, setCurrentVoteIndex] = useState(0);

    const handleVoteButtonPress = (index) => {
        console.log(`Vote button ${index} pressed`);
        if (index === currentVoteIndex) {
            details.votes[index] = true;
            nextVoteIndex = currentVoteIndex + 1;
            if (nextVoteIndex > 4) {
                gameObject.endGame(); //still working this out, but in this case the spies win
            }
            setCurrentVoteIndex(nextVoteIndex)
        }
    }

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

    useEffect(() => {
        gameObject.updateMission(currentMission, details);
    }, [details])

    console.log("Details: ", details);

    return (
        <View style={{backgroundColor: "#30314090"}}>
            <View style={[styles.topBarContainer]}>
                <MissionTopBar setCurrentMission={setCurrentMission} currentMission={currentMission}/>
            </View>
            <View style={[styles.detailsContainer]}>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <View style={[styles.detailMessage, {backgroundColor: styles.colors.BLUE}]}>
                            <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Agents: {details.numTeam}</Text>
                        </View>
                        <View style={[styles.detailMessage, {backgroundColor: styles.colors.RED}]}>
                            <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Fails: {details.numFails}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <Text>This will contain the input buttons</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.topBarContainer, styles.messageContainer, styles.voteBar]}>
                {details.votes?.map((status, index) => {
                    console.log(`Status: ${status}, Index: ${index}`)
                    return (
                        <Button
                            title={status ? " Failed " : "  Vote!  "}
                            color={status ? styles.colors.RED : styles.colors.YELLOW }
                            onPress={() => handleVoteButtonPress(index)}
                            key={index}
                        />
                    )
                })}
            </View>
        </View>
    )
}

export default MissionDetails;
