let client = new Colyseus.Client('ws://localhost:2567');



client.joinOrCreate("my_room").then(room => {
  console.log(room.sessionId, "joined", room.name);
  room.send("Hello world!");
  console.log("here");
  room.send("bang!");

  room.state.onChange = function(changes) {
    console.log("changes are:\n", changes);
  };
}).catch(e => {
    console.log("JOIN ERROR", e);
});
