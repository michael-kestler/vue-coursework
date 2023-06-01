//if you don't need access to vue properties you can write regular javascript function
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },

  methods: {
      startGame(){
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.winner = null;
        this.currentRound = 0;
        this.logMessages = [];

      },

    //when the attack button is clicked we want to trigger a method that reduces the monster's health
    attackMonster() {
      this.currentRound++;  
      const attackValue = getRandomValue(5, 12);
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue)

      // when player attacks monster attack player method is triggered
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue)
    },

    //this method should only be available every three rounds
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue)
      this.attackPlayer();
    },

    healPlayer(){
        this.currentRound++;
        const healValue = getRandomValue(8, 20);
        if (this.playerHealth + healValue > 100){
            this.playerHealth = 100;
        } else {
            this.playerHealth += healValue;
        }
        this.addLogMessage('player', 'heal', healValue)
        this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster';
    },

    addLogMessage(who, what, value) {
        this.logMessages.unshift({
          action: who,
          actionType: what,
          actionValue: value
        });
    }

  },

  

  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0){
        return {width: '0%'}
      }
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      if(this.playerHealth < 0){
        return {width: '0%'}
      }
      return { width: this.playerHealth + "%" };
    },

    mayUseSpecialAttack(){
        return this.currentRound % 3 !==0
    }
  },

  watch: {
    playerHealth(value) {
        if(value <= 0 && this.monsterHealth <= 0) {
            //a draw
            this.winner = 'draw';
        } else if (value <= 0){
            //player lost
            this.winner = 'monster';
        }
    },
    monsterHealth(value) {
        if(value <= 0 && this.playerHealth <= 0) {
            //a draw
            this.winner = 'draw';
        } else if (value <= 0){
            //monster loss
            this.winner = 'player';
        }
    }
  }


});

app.mount("#game");
