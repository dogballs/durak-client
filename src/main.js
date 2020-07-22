import Vue from 'vue';

import './assets/styles/global.css';

import App from './components/App';
import ConnectionStatus from './components/ConnectionStatus';

const ConnectionState = {
  Initiating: 1,
  Failed: 2,
  Completed: 3,
};

const app = new Vue({
  data() {
    return {
      room: {
        state: 0,
        players: [],
      },
      game: {
        players: [],
        state: 0,
        trumpCard: null,
        stockCount: 0,
        discardCount: 0,
        attackerId: -1,
        defenderId: -1,
        passerId: -1,
        currentId: -1,
        round: {
          attackCards: [],
          defenceCards: [],
        },
      },
      enemies: [],
      player: {
        id: -1,
        role: 2,
      },
      hand: {
        cards: [],
      },
      ws: null,
      state: ConnectionState.Initiating,
    };
  },

  computed: {
    canStartGame() {
      return this.isPlayerHost && this.room.state === 2;
    },
    canStopGame() {
      if (this.canEndGame) {
        return false;
      }
      return this.isPlayerHost && this.room.state === 3;
    },
    canEndGame() {
      return (
        this.isPlayerHost && this.room.state === 3 && this.game.state === 3
      );
    },
    isRoomPlaying() {
      return this.room.state === 3;
    },
    isGameTake() {
      return this.game.state === 2;
    },
    isGameEnded() {
      return this.game.state === 3;
    },
    isGameLoss() {
      return this.isGameEnded && this.game.players.length === 1;
    },
    isGameDraw() {
      return this.isGameEnded && this.game.players.length === 0;
    },
    isPlayerHost() {
      return this.player.role === 0;
    },
    isPlayerRegular() {
      return this.player.role === 1;
    },
    isPlayerObserver() {
      return this.player.role === 2;
    },
    isPlayerCurrent() {
      return this.player.id === this.game.currentId;
    },
    isPlayerAttacker() {
      return this.player.id === this.game.attackerId;
    },
    isPlayerDefender() {
      return this.player.id === this.game.defenderId;
    },
    isPlayerPasser() {
      return this.player.id === this.game.passerId;
    },
    isConnectionInitiating() {
      return this.state === ConnectionState.Initiating;
    },
    isConnectionFailed() {
      return this.state === ConnectionState.Failed;
    },
  },

  mounted() {
    this.ws = new WebSocket('ws://dogballs-durak-server.herokuapp.com');

    this.ws.addEventListener('error', () => {
      this.state = ConnectionState.Failed;
    });

    this.ws.addEventListener('close', () => {
      this.state = ConnectionState.Failed;
    });

    this.ws.addEventListener('open', () => {
      let name = window.sessionStorage.getItem('durak.name');

      while (!name) {
        name = window.prompt('Enter your name');
      }

      name = name.substr(0, 20);

      window.sessionStorage.setItem('durak.name', name);

      this.state = ConnectionState.Completed;
      this.ws.send(JSON.stringify({ id: 'register', name }));
    });

    this.ws.addEventListener('message', (ev) => {
      const message = JSON.parse(ev.data);
      console.log('message', message);

      if (message.id === 'player') {
        this.player = message.player;
        return;
      }

      if (message.id === 'room') {
        this.room = message.room;
        return;
      }

      if (message.id === 'game') {
        this.game = message.game;
        this.enemies = message.enemies;
        this.hand = message.hand;
        this.player = message.player;
      }

      if (message.id === 'hand') {
        this.hand = message.hand;
      }
    });
  },

  render(h) {
    if (this.state !== ConnectionState.Completed) {
      return h(ConnectionStatus);
    }

    return h(App);
  },
});

app.$mount('[data-app]');
