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
    // 9 players:
    {
        numSpies: 3,
        1:{numTeam: 3, numFails: 1},
        2:{numTeam: 4, numFails: 1},
        3:{numTeam: 4, numFails: 1},
        4:{numTeam: 5, numFails: 2},
        5:{numTeam: 5, numFails: 1},
    },
    // 10 players:
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
    numPlayers: 5,
    activeMission: 1,
    missionProfiles: {},
    setUpComplete: false,
    gameOver: false,
    teamWin: null,
    passes: 0,
    fails: 0,

    setNumPlayers: function(num) {
        this.numPlayers = num;
    },

    getNumPlayers: function() {
        return this.numPlayers;
    },

    setUp: function(num) {
        this.setNumPlayers(num);
        this.missionProfiles = {...possibleMissions[num - 5]};
        for (const key in this.missionProfiles) {
            if (key !== "numSpies") {
                this.missionProfiles[key]["votes"] = [false, false, false, false, false, 0]; //The last number represensts the current vote index
            }
        }
        return this.missionProfiles.numSpies;
    },

    getMissionDetails: function(missionID) {
        return this.missionProfiles[missionID];
    },

    setActiveMission: function(missionID) {
        this.activeMission = missionID;
    },

    getActiveMission: function() {
        return this.activeMission;
    },

    getMissions: function() {
        const missionsArray = [];
        for (const key in this.missionProfiles) {
            const { numTeam, numFails, status } = this.missionProfiles[key]
            if (key !== "numSpies") {
                missionsArray.push([key, numTeam, numFails, status]);
            }
        }
        return missionsArray;
    },

    missionSucceeded: function(missionID, value) {
        value ? this.missionProfiles[missionID]["status"] = "Pass" : this.missionProfiles[missionID]["status"] = "Fail";
        value ? this.passes++ : this.fails++;
    },

    setSetUpComplete: function() {
        this.setUpComplete = true;
    },

    getSetUpStatus: function() {
        return this.setUpComplete;
    },

    updateMission: function(missionID, data) {
        this.missionProfiles[missionID] = data;
    },

    endGame: function(result) {
        this.gameOver = true;
        this.teamWin = result;
        return true;
    },

    checkGameEnd: function() {
        if (this.passes >= 3) {
            this.endGame("agents");
            return true;
        } else if (this.fails >= 3) {
            this.endGame('spies');
            return true;
        }
    },

    getPasses: function() {
        return this.passes;
    },

    getFails: function() {
        return this.fails;
    },

    getTeamWin: function() {
        return this.teamWin;
    },

    resetGame: function() {
        this.missionProfiles = {};
        this.activeMission = 1;
        this.setUpComplete = false;
        this.gameOver = false;
        this.teamWin = null;
        this.passes = 0;
        this.fails = 0;
    },




};

module.exports = gameObject;
