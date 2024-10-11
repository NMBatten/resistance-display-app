import { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
styles = require('./StyleSheet');
const gameObject = require('./GameLogic');

// This component allows the user to enter the number of players.
// Once the number of players is confirmed it will display
// how many players should be resistance and how many will be spies

const SetUp = ({dispSelf, setDisp}) => {
    const [numPlayers, setNumPlayers] = useState(gameObject.getNumPlayers());
    const [dispMessage, setDispMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [submitButtonActive, setSubmitButtonActive] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleUpPress = () => {
        if (numPlayers + 1 <= 10) {
            setDispMessage(false);
            setNumPlayers(numPlayers + 1);
            submitButtonActive ? null : setSubmitButtonActive(true);
        } else {
            setMessageText("10 players is the max");
            setDispMessage(true);
        };
    };

    const handleDownPress = () => {
        if (numPlayers - 1 >= 5) {
            setDispMessage(false);
            setNumPlayers(numPlayers - 1);
            submitButtonActive ? null : setSubmitButtonActive(true);
        } else {
            setMessageText("5 players is the minimum");
            setDispMessage(true);
        };
    };

    const handleSubmitButtonPress = () => {
        const numSpies = gameObject.setUp(numPlayers);
        setSubmitted(true);
        setMessageText(`There will be ${numSpies} Spies`);
        setDispMessage(true);
    };

    const handleFinishButtonPress = () => {
        gameObject.setSetUpComplete();
        console.log("Setup Complete")
        setDisp();
    };

    if (dispSelf) {
        return (
            <>
                <View style={[styles.setUpContainer, {backgroundColor: "#30314050"}]}>
                    <View style={[styles.messageContainer, styles.startGameContainer]}>
                        <Text style={[styles.titleText, {color: 'black'}]}>WELCOME TO THE RESISTANCE</Text>
                    </View>
                    <View style={[styles.playerInputBox]}>
                        <TouchableOpacity onPress={() => handleDownPress()}>
                            <View style={[styles.SetupBox, {backgroundColor: styles.colors.OPAQUERED}]}>
                                <Text style={[styles.SetupText]}>     -     </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor: "#30314090", borderRadius: 10}}>
                            <Text style={[styles.smallTitleText, {color: "black", fontSize: 32}]}>{numPlayers}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleUpPress()}>
                            <View style={[styles.SetupBox, {backgroundColor: styles.colors.OPAQUEBLUE}]}>
                                <Text style={[styles.SetupText]}>     +     </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.startGameContainer, styles.messageContainer, { opacity: dispMessage ? 1 : 0}]}>
                        { dispMessage ? <Text style={[styles.smallTitleText, {color:"black"}]}>{messageText}</Text> : null }
                    </View>
                    <View style={[styles.startGameContainer]}>
                        <TouchableOpacity onPress={() => {dispMessage && submitted ? handleFinishButtonPress() : handleSubmitButtonPress()}}>
                            <View style={[styles.SetupBox, {backgroundColor: styles.colors.OPAQUERED}]}>
                                <Text style={[styles.SetupText]}>{ dispMessage && submitted ? "   Start Game   " : "      Submit      " }</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    };
}

export default SetUp;
