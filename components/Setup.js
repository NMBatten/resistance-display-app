import { useState } from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
const styles = require('./StyleSheet');
const gameObject = require('./GameLogic');

// This component allows the user to enter the number of players.
// Once the number of players is confirmed it will display
// how many players should be resistance and how many will be spies

const SetUp = () => {
    const [numPlayers, setNumPlayers] = useState(5);
    const [dispMessage, setDispMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [submitButtonActive, setSubmitButtonActive] = useState(true);
    const [dispFinishButton, setDispFinishButton] = useState(false);

    const handleUpPress = () => {
        if (numPlayers + 1 <= 10) {
            setNumPlayers(numPlayers + 1);
            submitButtonActive ? null : setSubmitButtonActive(true);
        } else {
            setMessageText("10 players is the max");
            setDispMessage(true);
        };
    };

    const handleDownPress = () => {
        if (numPlayers - 1 >= 5) {
            setNumPlayers(numPlayers - 1);
            submitButtonActive ? null : setSubmitButtonActive(true);
        } else {
            setMessageText("5 players is the minimum");
            setDispMessage(true);
        };
    };

    const handleSubmitButtonPress = () => {
        const numSpies = gameObject.setUp(numPlayers);
        setSubmitButtonActive(false)
        setMessageText(`There will be ${numSpies} Spies`);
        setDispFinishButton(true);
    };

    const handleFinishButtonPress = () => {
        gameObject.setSetUpComplete();
    };


    return (
        <View style={[styles.setUpContainer]}>

                <Text style={[styles.titleText]}>WELCOME TO THE RESISTANCE</Text>
                <View style={[styles.playerInputBox]}>
                    <Button
                        onPress={handleDownPress}
                        title="     -     "
                        disable={numPlayers === 5}
                        color={styles.colors.RED}
                        style={{}}
                    />
                    <View>
                        <Text style={[styles.smallTitleText]}>{numPlayers}</Text>
                    </View>
                    <Button
                        onPress={handleUpPress}
                        title="     +     "
                        disable={numPlayers === 10}
                        color={styles.colors.BLUE}
                    />
                </View>
                <View style={[styles.startGameContainer]}>
                    <Button
                        onPress={handleSubmitButtonPress}
                        title="   Start Game   "
                        color={styles.colors.BURGUNDY}
                    />
                </View>
        </View>
    )


}

export default SetUp;
