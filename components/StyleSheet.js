import { StyleSheet } from 'react-native';

const colors = {
    BLUE: "#0505cc",
    RED: "#800000",
    BURGUNDY: "#800000",
    YELLOW: "#ffd11aaa",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f2e',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.RED,
        height: "100%",
        width: "100%",
    },
    failedMissionButton: {
        shadowColor: colors.RED,
    },
    successMissionButton: {
        backgroundColor: colors.BLUE,
    },
    topBarContainer: {
        flex: 2,
        padding: 10,
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    titleText: {
        color: colors.BLUE,
        fontWeight: "bold",
        fontSize: 35,
        textShadowColor: "#558ACC80",
        textAlign: "center",
        textShadowOffset: {width: 2, height: 3},
        textShadowRadius: 4,
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
        fontSize: 25,
        textShadowColor: "#558ABB80",
        textAlign: "center",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 4,
    },
    startGameContainer: {
        padding: 10,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    messageContainer: {
        backgroundColor: "#30314090",
        borderRadius: 10,
        overflow: "hidden",
    },
    detailsContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "flex-start",
        justifyContent: "space-around",
        flex: 3,
        backgroundColor: colors.YELLOW,
    },
    innerDetailContainer: {
        flexDirection: "column",
        flexGrow: 2,
    },
    missionDisplayContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        // flexGrow: 1,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: colors.RED,
        width: "50%",
    },
    missionDetailCard: {
        backgroundColor: "#30314090",
        borderRadius: 10,
        overflow: "hidden",
    },
    innerCardView: {
        backgroundColor: "#30314090",
        borderRadius: 5,
    },
    voteButton: {
        height: "10%",
        margin: "2em",
        padding: "2em",

    },
    voteBar: {
        height: "34%",
        flex: 1,
    },
});

styles.colors = colors

module.exports = styles;
