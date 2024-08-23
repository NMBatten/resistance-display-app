import { BackHandler, View, Text, TouchableOpacity } from "react-native";

const styles = require('./StyleSheet');
const gameObject = require('./GameLogic');

const GameEnd = () => {
    return (
        <View>
            <Text>This is the game end page</Text>
        </View>
    )
}

export default GameEnd;
