import { useEffect, useState } from "react";
import { BackHandler, View, Text, TouchableOpacity } from "react-native";

const styles = require('./StyleSheet');
const gameObject = require('./GameLogic');

const GameEnd = ({setCurrentMission, setSetUpComplete}) => {

    const [teamWin, setTeamWin] = useState("");

    const reload = () => {
        gameObject.resetGame();
        setCurrentMission(1);
        setSetUpComplete(false);
    }

    const exit = () => {
        BackHandler.exitApp();
    }

    useEffect(() => {
        thisTeamWin = gameObject.getTeamWin();
        setTeamWin(thisTeamWin[0].toUpperCase() + thisTeamWin.slice(1));
    }, [setTeamWin])

    return (
        <View style={{backgroundColor: "#30314090"}}>
            <View style={[styles.gameEndTopContainer]}>
                <View style={[styles.detailMessage, styles.gameEndTopItem, {backgroundColor: styles.colors.OPAQUEBLUE}]}>
                    <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Agents Passed   {gameObject.getPasses()} Missions</Text>
                </View>
                <View style={[styles.detailMessage, styles.gameEndTopItem, {backgroundColor: styles.colors.OPAQUERED}]}>
                    <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>Spies Sabotaged {gameObject.getFails()} Missions</Text>
                </View>
            </View>
            <View style={[styles.gameResultBar, {backgroundColor: gameObject.getTeamWin() === "agents" ? styles.colors.OPAQUEBLUE : styles.colors.OPAQUERED }]}>
                <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>{teamWin} Win!</Text>
            </View>
            <View style={[styles.gameReloadBar]}>
                <TouchableOpacity onPress={() => reload()}>
                    <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUEBLUE}]}>
                        <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>NEW GAME</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => exit()}>
                    <View style={[styles.detailMessage, {backgroundColor: styles.colors.OPAQUERED}]}>
                        <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}> EXIT </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GameEnd;
