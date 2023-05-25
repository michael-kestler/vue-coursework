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
    };
  },

  methods: {
    //when the attack button is clicked we want to trigger a method that reduces the monster's health
    attackMonster() {
      this.currentRound++;  
      const attackValue = getRandomValue(5, 12);
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.monsterHealth -= attackValue;

      // when player attacks monster attack player method is triggered
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },

    //this method should only be available every three rounds
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },

  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
});

app.mount("#game");
