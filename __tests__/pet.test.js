const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () =>{
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has initial age of 0', ()=> {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('increase  pet age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
         expect(pet.age).toEqual(1);
        });
    it('increase  pet hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decrease  pet fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
    });
    });
    describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();
    expect(pet.fitness).toEqual(10);
    });
    });
describe('feed', () => {
    it('decreases hunger  to a minimum of 0', () => {
      const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    });
describe('check up', () => {
    it('checks if the pet needs a walk', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        expect(pet.checkUp()).toEqual('I need a walk');
    });
    it('checks if the pet is hungry', () => {
        const pet = new Pet('Fido');
        pet.hunger = 7;
        expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('checks if the pet is hungry and needs a walk', () => {
        const pet = new Pet('Fido');
        ((pet.hunger = 6) && (pet.fitness = 2))
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
});
describe('death', () => {
    it('Checking if the pet is still alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10
        expect(pet.isAlive).toEqual(false);
    });
    it('Checking if the pet is still alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0
        expect(pet.isAlive).toEqual(false);
    });
    it('Checking if the pet is still alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30
        expect(pet.isAlive).toEqual(false);
    });
});
describe('having a babe or adotpeted one', () =>{
    it('checking if babe is added to children', () =>{
        const pet = new Pet('Fido');
    const child = new Pet('Amelia');
    pet.adoptChild(child);
    expect(pet.children).toEqual([child]);
});
    it('checking if babe is created', () =>{
        const pet = new Pet('Fido');
        pet.haveBaby('Dave');
        expect(pet.children).toBeInstanceOf(Object);
    });
});
