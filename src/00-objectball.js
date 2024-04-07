//1.
const teams = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: [
      {
        name: "Alan anderson",
        number: "0",
        shoe: "16",
        points: "22",
        rebounds: "12",
        assists: "12",
        blocks: "1",
        steals: "3",
        slamDunks: "1",
      },
      {
        name: "Reggie Evans",
        number: "30",
        shoe: "14",
        points: "12",
        rebounds: "12",
        assists: "12",
        blocks: "12",
        steals: "12",
        slamDunks: "1",
      },
      {
        name: "Brook Lopez",
        number: "11",
        shoe: "17",
        points: "17",
        rebounds: "19",
        assists: "10",
        steals: "3",
        blocks: "1",
        slamDunks: "15",
      },
      {
        name: "Mason Plumlee",
        number: "1",
        shoe: "19",
        points: "26",
        rebounds: "12",
        assists: "6",
        steals: "3",
        blocks: "8",
        slamDunks: "5",
      },
      {
        name: "Jason Terry",
        number: "31",
        shoe: "15",
        points: "19",
        rebounds: "2",
        assists: "2",
        steals: "4",
        blocks: "11",
        slamDunks: "1",
      },
    ],
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: [
      {
        name: "Jeff Adrien",
        number: "4",
        shoe: "14",
        points: "10",
        rebounds: "1",
        assists: "1",
        blocks: "2",
        steals: "7",
        slamDunks: "2",
      },
      {
        name: "Bismak Biyombo",
        number: "0",
        shoe: "16",
        points: "12",
        rebounds: "4",
        assists: "7",
        blocks: "7",
        steals: "15",
        slamDunks: "10",
      },
      {
        name: "DeSagna Diop",
        number: "2",
        shoe: "14",
        points: "24",
        rebounds: "12",
        assists: "12",
        steals: "4",
        blocks: "5",
        slamDunks: "5",
      },
      {
        name: "Ben Gordon",
        number: "8",
        shoe: "15",
        points: "33",
        rebounds: "3",
        assists: "2",
        steals: "1",
        blocks: "1",
        slamDunks: "0",
      },
      {
        name: "Brendan Haywood",
        number: "33",
        shoe: "15",
        points: "6",
        rebounds: "12",
        assists: "12",
        steals: "22",
        blocks: "5",
        slamDunks: "12",
      },
    ],
  },
};

function gameObject() {
  return teams;
}

// console.log(gameObject());

const homePlayers = teams.home.players;
const awayPlayers = teams.away.players;

//2.
function numPointsScored() {
  // Loop through home players
  for (let i = 0; i < homePlayers.length; i++) {
    // Check if the player's name matches
    if (homePlayers[i].name === "Alan anderson") {
      // Return the points scored by the player
      return parseInt(homePlayers[i].points);
    }
  }
}
// console.log(numPointsScored("Alan anderson"));

//3.

////NOTES
// use the for of to iterate properties of object and return properties
for (const players of homePlayers) {
  console.log(players.name);
}

//use for in to iterate and return keys
for (const key in homePlayers) {
  console.log(key);
}
