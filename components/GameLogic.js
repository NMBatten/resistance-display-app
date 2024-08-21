// possibleMissions is an array that contains objects representing
// each possible mission set depending on the number of players.
// Each of the objects inside possibleMissions contains the details
// of each mission profile

// const { useState } = require("react");

const possibleMissions = [
    // eg. this represents the missions if 5 people are playing, the
    // first entry will be the number of spies
    // Need to add in an array inside of each object representing
    // votes and their statuses
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
    activeMission: 1,
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
        for (const key in this.missionProfiles) {
            if (key !== "numSpies") {
                this.missionProfiles[key]["votes"] = [false, false, false, false, false, 0]; //The last number represensts the current vote index
            }
        }
        return this.missionProfiles.numSpies;
    },

    getMissionDetails (missionID) {
        console.log("MissionProfileKey: ", String(missionID))
        console.log("Mission Details: ", this.missionProfiles[String(missionID)]);
        return this.missionProfiles[missionID];
    },

    setActiveMission (missionID) {
        this.activeMission = missionID;
    },

    getActiveMission () {
        return this.activeMission
    },

    getMissions () {
        const missionsArray = [];
        for (const key in this.missionProfiles) {
            const { numTeam, numFails, status } = this.missionProfiles[key]
            if (key !== "numSpies") {
                missionsArray.push([key, numTeam, numFails, status]);
            }
        }
        return missionsArray;
    },

    missionSucceeded (missionID, value) {
        value ? this.missionProfiles[missionID]["status"] = "Pass" : this.missionProfiles[missionID]["status"] = "Fail";
    },

    setSetUpComplete () {
        this.setUpComplete = true;
    },

    getSetUpStatus () {
        return this.setUpComplete;
    },

    updateMission (missionID, data) {
        this.missionProfiles[missionID] = data;
    },

    endGame () {
        console.log("game over");
        return null;
    },
};

module.exports = gameObject;


// Logic for votes still needs to be implemented. Also need to add in an automatic
// game end checker.
