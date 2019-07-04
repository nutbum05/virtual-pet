const maxFitness = 10
const minHunger = 0

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};
Pet.prototype = {
    get isAlive () {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0; 
    },
    growUp : function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age  += 1;
        this.hunger += 5;
        this.fitness -= 3;
},
    walk : function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if ((this.fitness + 4) <= maxFitness) {
        this.fitness += 4;
        }else{
        this.fitness = maxFitness;
    };
},
    feed : function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if((this.hunger - 3) <= minHunger){
        this.hunger = minHunger;
    } else {
    this.hunger -= 3 };
},
    checkUp : function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
    if (this.fitness <= 3 && this.hunger >= 5){
        return 'I am hungry AND I need a walk';
    };
    if (this.fitness <= 3){
        return 'I need a walk';
    } if (this.hunger >= 5){
        return 'I am hungry';
    
    }else {
          return 'I feel great!'
    };
},
    adoptChild: function (child) {
    this.children.push(child);

},
    haveBaby: function (name) {
    const baby = new Pet (name);
    this.children.push(baby);
},
};




module.exports = Pet;