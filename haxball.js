const geo = [{ "code": "sc", "lat": -23.561752475189056, "lon": -46.64842419520904 }];

var room = HBInit({
	roomName: "TODOS JOGAM 3 | NEGROS FEDEM 👽⏪®️",
	maxPlayers: 16,
	noPlayer: true, // Remove host player (recommended!)
    public: true,
    password: 'pretapretona11',
    geo: geo[0],
    token: roomArgs['token'] 
});
room.setDefaultStadium("Big");
room.setScoreLimit(5);
room.setTimeLimit(0);

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() { 
  // Get all players
  var players = room.getPlayerList();
  if ( players.length == 0 ) return; // No players left, do nothing.
  if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

room.onPlayerJoin = function(player) {
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
}
