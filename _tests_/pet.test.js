const Pet = require("../src/pet");

/*let pet;
  beforeEach(() => {
    pet = new Pet('Fido')
  })*/

describe("constructor", () => {
  let pet;
  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("returns an object", () => {
    expect(pet).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    expect(pet.name).toEqual("Fido");
  });

  it("has initial age of 0", () => {
    expect(pet.age).toBe(0);
  });

  it("has initial hunger of 0", () => {
    expect(pet.hunger).toBe(0);
  });

  it("has initial age of 0", () => {
    expect(pet.age).toBe(0);
  });

  describe("growUp", () => {
    beforeEach(() => {
      pet.growUp();
    });

    it("increments the age by 1", () => {
      expect(pet.age).toBe(1);
    });

    it("increments the hunger by 5", () => {
      expect(pet.hunger).toBe(5);
    });

    it("decreases the fitness property by 3", () => {
      expect(pet.fitness).toBe(7);
    });

    it("Throws an error if the pet is not alive.", () => {
      pet.age = 30;

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe("walk", () => {
    beforeEach(() => {
      pet.walk();
    });

    it("increases fitness by 4, if it is higher than 6, equals it to 10", () => {
      expect(pet.fitness).toBe(10);
      pet.fitness = 1
      pet.walk();
      expect(pet.fitness).toBe(5);
    });

    it("Throws an error if the pet is not alive.", () => {
      pet.age = 40;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe("feed", () => {
    beforeEach(() => {
      pet.feed();
    });

    it("reduces hunger by 3, if it is less than 3, equals it to 0", () => {
        expect(pet.hunger).toBe(0);
        pet.hunger = 9;
        pet.feed();
        expect(pet.hunger).toBe(6);
    });

    it("Throws an error if the pet is not alive.", () => {
      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe("checkUp", () => {
    it("logs messages depending on the status of the pet", () => {
        pet.hunger = 9;
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk!");
        pet.hunger = 0;
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I need a walk!");
        pet.hunger = 9;
        pet.fitness = 10;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry!");
        pet.hunger = 0;
        pet.fitness = 10;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I feel great!");
    });
    it("Throws an error if the pet is not alive.", () => {
      pet.hunger = 12;

      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
  });
});