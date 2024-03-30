import { StyleSheet } from 'react-native';

const colors = {
    BLUE: "blue",
    RED: "red",
    YELLOW: "gold",
    BURGUNDY: "#800000",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f2e',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.RED,
    },
    failedMissionButton: {
        color: colors.RED,
    },
    successMissionButton: {
        backgroundColor: colors.BLUE,
    },
    topBarContainer: {
        flex: 1,
        paddingTop: 10,
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    titleText: {
        color: colors.BLUE,
        fontWeight: "bold",
        fontSize: 30,
        textShadowColor: "#558ABB",
        textAlign: "center",

    },
    setUpContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        borderColor: colors.RED,
        paddingTop: 50,
    },
    playerInputBox: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: colors.RED,
        padding: 10,
    },
    smallTitleText: {
        color: colors.BLUE,
        fontWeight: "bold",
        fontSize: 20,
    },
    startGameContainer: {
        padding: 10,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
    }
});

styles.colors = colors

module.exports = styles;
