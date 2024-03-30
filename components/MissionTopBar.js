import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const styles = require('./StyleSheet');

const MissionTopBar = () => {

    const [ dispMessage, setDispMessage ] = useState(false);

    const message = () => {
        return (
            <View style={{backgroundColor: "orange"}}>
                <Text>You pressed the number button!</Text>
            </View>
        )
    }

    const handlePress = () => {
        dispMessage ? setDispMessage(false) : setDispMessage(true);
    }

    return (
        <View>
            <Button
                onPress={handlePress}
                title="This is a button"
                color="blue"
            />
            {dispMessage ? message() : null}
        </View>
    )
}

export default MissionTopBar;
