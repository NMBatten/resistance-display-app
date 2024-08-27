import { useEffect, useState } from 'react';
import { Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import MissionTopBar from './MissionTopBar';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionDetails = ({ currentMission, setCurrentMission }) => {
    const [details, setDetails] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [pFIsActive, setPFIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false); // allows items to be edited
    const [currentVote, setCurrentVote] = useState(0);

    const setVoteResult = (status) => {
        details.votes[details.votes[5] - 1] = status;
        if (status === 'pass') {
            console.log("VOTE PASSED");
            setPFIsActive(true);
            details.votes[5] = 10;
        }
        setDetails({...details});
    }

    const handleVoteButtonPress = (index) => {
        console.log(`Vote button ${index} pressed`);
        if (index === details.votes[5]) {
            Alert.alert("Vote Dialog", "Pass or Fail the vote", [
                {
                    text: "Pass",
                    onPress: () => setVoteResult('pass'),
                    style: 'cancel'
                },
                {
                    text: "Fail",
                    onPress: () => setVoteResult('fail'),
                    style: 'destructive'
                }
            ]);
            details.votes[5] += 1;
            if (details.votes[5] > 4 && details.votes[index] === 'fail') {
                gameObject.endGame("spies"); //still working this out, but in this case the spies win
            }
            setCurrentVote(currentVote + 1);
            setDetails({...details});
        } else {
            console.log("Does not match current vote index")
        }
    }

    const resolveMission = (status) => {
        console.log("MISSION RESOLVE ACTIVATED");
        if (pFIsActive) {
            gameObject.missionSucceeded(currentMission, status === 'pass');
            setPFIsActive(false);
            if (currentMission + 1 >= 6) {
                setCurrentMission(1);
                gameObject.endGame();
            } else {
                setCurrentMission(currentMission+1);
            }
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
    }, [details, details.votes])

    console.log("Details: ", details);

    return (
        <View style={{backgroundColor: "#30314090"}}>
            <View style={[styles.topBarContainer]}>
                <MissionTopBar setCurrentMission={setCurrentMission} currentMission={currentMission}/>
            </View>
            <View style={[styles.detailsContainer]}>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUEBLUE}]}>
                            <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Agents: {details.numTeam}</Text>
                        </View>
                        <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUERED}]}>
                            <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Fails: {details.numFails}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.missionDisplayContainer]}>
                    <View style={[styles.innerDetailContainer]}>
                        <View style={[styles.passFailInputContainer]}>
                            <TouchableOpacity onPress={() => resolveMission('pass')}>
                                <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUEBLUE}]}>
                                    <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>PASS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => resolveMission('fail')}>
                                <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUERED}]}>
                                    <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>FAIL</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity onPress={() => console.log("Edit mode")}>
                            <View style={[styles.detailMessage, {backgroundColor: "#00000000"}]}>
                                <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>EDIT</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
            <View style={[styles.topBarContainer, styles.messageContainer, styles.voteBar]}>
                {details.votes?.slice(0,5).map((status, index) => {
                    return (
                        <Button
                            title={status === 'fail' ? " Failed " : status === 'pass' ? " Passed " : "  Vote!  "}
                            color={status === 'fail' ? styles.colors.RED : status === 'pass' ? styles.colors.BLUE : styles.colors.YELLOW }
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
