function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },

  growUp() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
  },

  walk() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }

    if (this.fitness >= 6) {
      this.fitness = 10;
    } else {
      this.fitness += 4;
    }
  },

  feed() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }

    if (this.hunger <= 3) {
      this.hunger = 0;
    } else {
      this.hunger -= 3;
    }
  },

  checkUp() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }

    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk!";
    } else if (this.fitness <= 3) {
      return "I need a walk!";
    } else if (this.hunger >= 5) {
      return "I am hungry!";
    } else {
      return "I feel great!";
    }
  },
};

/*Pet.prototype.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };

 Pet.prototype.walk = function() {
        if (this.fitness >= 6){
            this.fitness = 10;
        } else {
            this.fitness += 4;
        }
    };

 Pet.prototype.feed = function() {
        if (this.hunger <= 3){
            this.hunger = 0;
        } else {
            this.hunger -= 3;
        }
    };

 Pet.prototype.checkUp = function() {
        if ((this.fitness <= 3) && (this.hunger >= 5)) {
            console.log('I am hungry AND I need a walk!')
            return 'I am hungry AND I need a walk!'
        } else if (this.fitness <= 3){
            console.log('I need a walk!');
            return 'I need a walk!'
        } else if (this.hunger >= 5){
            console.log('I am hungry!');
            return 'I am hungry!'
        } else {
            console.log('I feel great!');
            return 'I feel great!'
        };
    };
*/

module.exports = Pet;
