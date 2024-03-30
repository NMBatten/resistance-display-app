import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f2e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    failedMissionButton: {
        backgroundColor: "red",
    },
    successMissionButton: {
        backgroundColor: "blue",
    },
    topBarContainer: {
        flex: 1,
        paddingTop: 10,
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
    }
});

module.exports = styles;
