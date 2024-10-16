import { StyleSheet } from 'react-native';

const colors = {
    BLUE: "#0505cc",
    RED: "#800000",
    BURGUNDY: "#800000",
    YELLOW: "#ffd11a",
    OPAQUEBLUE: "#0505ccaa",
    OPAQUERED: "#800000aa",
    OPAQUEYELLOW: "#ffd11aaa",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%",
    },
    topBarContainer: {
        flex: 1,
        padding: 5,
        margin: 1,
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
        paddingTop: 50,
    },
    playerInputBox: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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
        marginTop: 15,
        paddingTop: 10,
    },
    gameEndTopItem: {
        flex: 1,
    },
    gameResultBar: {
        borderRadius: 10,
        margin: 10,
    },
    gameReloadBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    modalView: {
        flexDirection: "column",
        alignContent: "center",
        paddingVertical: 30,
        paddingHorizontal: 100,
    },
    modalButton: {
        color: "black",
        padding: 4,
        margin: 4,
        fontSize: 25,
    },
    modalInnerContainer: {
        backgroundColor: "#30314060",
        borderRadius: 10,
    },
    voteButton: {
        borderRadius: 4,
    },
    SetupText: {
        color:"black",
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: "#558ABB80",
        textAlign: "center",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 4,
    },
    SetupBox: {
        borderRadius: 5,
        padding: 2,
    }

});

styles.colors = colors

module.exports = styles;
