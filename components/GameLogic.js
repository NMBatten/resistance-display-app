// possibleMissions is an array that contains objects representing
// each possible mission set depending on the number of players.
// Each of the objects inside possibleMissions contains the details
// of each mission profile

const possibleMissions = [
    // eg. this represents the missions if 5 people are playing, the
    // first entry will be the number of spies
    {
        numSpies: 2,
        1:{numTeam: 2, numFails: 1},
        2:{numTeam: 3, numFails: 1},
        3:{numTeam: 2, numFails: 1},
        4:{numTeam: 3, numFails: 1},
        5:{numTeam: 3, numFails: 1},
    },
    // 6 players:
    {
        numSpies: 2,
        1:{numTeam: 2, numFails: 1},
        2:{numTeam: 3, numFails: 1},
        3:{numTeam: 4, numFails: 1},
        4:{numTeam: 3, numFails: 1},
        5:{numTeam: 4, numFails: 1},
    },
    // 7 players:
    {
        numSpies: 3,
        1:{numTeam: 2, numFails: 1},
        2:{numTeam: 3, numFails: 1},
        3:{numTeam: 3, numFails: 1},
        4:{numTeam: 4, numFails: 2},
        5:{numTeam: 4, numFails: 1},
    },
    // 8 players:
    {
        numSpies: 3,
        1:{numTeam: 3, numFails: 1},
        2:{numTeam: 4, numFails: 1},
        3:{numTeam: 4, numFails: 1},
        4:{numTeam: 5, numFails: 2},
        5:{numTeam: 5, numFails: 1},
    },
    {
        numSpies: 3,
        1:{numTeam: 3, numFails: 1},
        2:{numTeam: 4, numFails: 1},
        3:{numTeam: 4, numFails: 1},
        4:{numTeam: 5, numFails: 2},
        5:{numTeam: 5, numFails: 1},
    },
    {
        numSpies: 4,
        1:{numTeam: 3, numFails: 1},
        2:{numTeam: 4, numFails: 1},
        3:{numTeam: 4, numFails: 1},
        4:{numTeam: 5, numFails: 2},
        5:{numTeam: 5, numFails: 1},
    },
];



const gameObject = {
    numPlayers: null,
    missionProfiles: undefined,
    currentMission: 1,
    setUpComplete: false,

    setNumPlayers (num) {
        this.numPlayers = num;
    },
    getNumPlayers () {
        return this.numPlayers;
    },

    setUp (num) {
        this.setNumPlayers(num);
        this.missionProfiles = possibleMissions[num - 5];
        return this.missionProfiles.numSpies;
    },

    getMissionDetails(mission_id) {
        return this.missionProfiles[mission_id];
    },

    setCurrentMission (mission_id) {
        this.currentMission = mission_id;
    },

    getMissions () {
        const missionsArray = [];
        for (const key in this.missionProfiles) {
            const { thisNumTeam, thisNumFails, status } = this.missionProfiles[key]
            missionsArray.push([thisNumTeam, thisNumFails, status]);
        }
        console.log("missionsArray in GameLogic.js", missionsArray);
        return missionsArray;
    },

    missionSucceeded (mission_id, value) {
        value ? this.missionProfiles[mission_id]["status"] = "Pass" : this.missionProfiles[mission_id]["status"] = "Fail";
    },

    setSetUpComplete () {
        this.setUpComplete = true;
    },

    getSetUpStatus () {
        return this.setUpComplete;
    },
}

module.exports = gameObject;


// Logic for votes still needs to be implemented. Also need to add in an automatic
// game end checker.
