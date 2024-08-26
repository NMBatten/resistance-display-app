import { BackHandler, View, Text, TouchableOpacity } from "react-native";

const styles = require('./StyleSheet');
const gameObject = require('./GameLogic');

const GameEnd = () => {
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
                <Text style={[styles.smallTitleText, {color:"black", padding: 10, margin: 10}]}>{gameObject.getTeamWin()} Win!</Text>
                <Text>YEET</Text>
            </View>
            <Text>This is the game end page</Text>
        </View>
    )
}

export default GameEnd;
