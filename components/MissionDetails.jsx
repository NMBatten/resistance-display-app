import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import MissionTopBar from './MissionTopBar';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic')

const MissionDetails = ({ currentMission, setCurrentMission, setGameOver }) => {
    const [details, setDetails] = useState([]);
    const [pFIsActive, setPFIsActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentVote, setCurrentVote] = useState(0);

    const setVoteResult = (status) => {
        details.votes[details.votes[5] - 1] = status;
        if (status === 'pass') {
            setPFIsActive(true);
            details.votes[5] = 10;
        } else {
            checkVoteFail();
        }
        setDetails({...details});
        setModalVisible(!modalVisible);
    }

    const checkVoteFail = () => {
        if (details.votes[5] > 4 && details.votes[details.votes[5] - 1] === 'fail') {
            gameObject.endGame("spies");
            setGameOver(true);
        }

    }

    const handleVoteButtonPress = (index) => {
        if (index === details.votes[5]) {
            setModalVisible(true)
            details.votes[5] += 1;
            setCurrentVote(currentVote + 1);
            setDetails({...details});
        }
    }

    const resolveMission = (status) => {
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
    }, [currentMission]);

    useEffect(() => {
        gameObject.updateMission(currentMission, details);
    }, [details, details.votes])

    return (
        <View style={{backgroundColor: "#30314090"}}>
            <View style={{marginTop: 5}}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={[styles.modalView]}>
                        <View style={[styles.modalInnerContainer]}>
                            <View style={[styles.detailMessage, {backgroundColor: styles.colors.YELLOW}]}>
                                <Text style={[styles.smallTitleText, styles.modalButton]}>Pass or Fail the Vote!</Text>
                            </View>
                            <TouchableOpacity onPress={() => setVoteResult('pass')}>
                                <View style={[styles.detailMessage, {backgroundColor: styles.colors.BLUE}]}>
                                    <Text style={[styles.smallTitleText, styles.modalButton]}>PASS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVoteResult('fail')}>
                                <View style={[styles.detailMessage, {backgroundColor: styles.colors.RED}]}>
                                    <Text style={[styles.smallTitleText, styles.modalButton]}>FAIL</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
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
                    </View>
                </View>
            </View>
            <View style={[styles.topBarContainer, styles.voteBar]}>
                {details.votes?.slice(0,5).map((status, index) => {
                    return (
                        <TouchableOpacity onPress={() => handleVoteButtonPress(index)} key={index}>
                            <View style={[{backgroundColor: status === 'fail' ? styles.colors.OPAQUERED : status === 'pass' ? styles.colors.OPAQUEBLUE : styles.colors.OPAQUEYELLOW, borderRadius: 5 }]}>
                                <Text style={[styles.smallTitleText, {color:"black", padding: 4, margin: 4, fontSize: 22}]}>
                                    {status === 'fail' ? " Failed " : status === 'pass' ? " Passed " : "  Vote!  "}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default MissionDetails;
