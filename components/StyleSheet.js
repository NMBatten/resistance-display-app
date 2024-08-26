import { StyleSheet } from 'react-native';

const colors = {
    BLUE: "#0505cc",
    RED: "#800000",
    BURGUNDY: "#800000",
    YELLOW: "#ffd11aaa",
    OPAQUEBLUE: "#0505ccaa",
    OPAQUERED: "#800000aa",
    OPAQUEYELLOW: "#ffd11aaaaa",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
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
        borderRadius: 15,
        marginHorizontal: 10,
        overflow: "hidden",
    },
    detailsContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "flex-start",
        justifyContent: "space-around",
        flex: 4,
        backgroundColor: "#30314020",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    innerDetailContainer: {
        flexDirection: "column",
        flexGrow: 1,
    },
    missionDisplayContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
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
        alignSelf: "center",
    },
    voteBar: {
        marginVertical: 10,
        alignContent: "center",
    },
    detailMessage: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
    },
    passFailInputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
    },
    gameEndTopContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
    },
    gameEndTopItem: {
        flex: 1,
    },
    gameResultBar: {
        flex: 1,
    }
});

styles.colors = colors

module.exports = styles;
