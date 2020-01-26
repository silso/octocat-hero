const colyseus = require('colyseus');
const schema = require('@colyseus/schema');
const Schema = schema.Schema;


class State extends Schema {
}
schema.defineTypes(State, {
  x: 'number'
});

exports.MyRoom = class extends colyseus.Room {

  onCreate (options) {
    this.setState(new State());
  }

  onJoin (client, options) {
  }

  onMessage (client, message) {
    if (message === "bang!") {
      this.state.x = 5;
    }
  }

  onLeave (client, consented) {
  }

  onDispose() {
  }

}
