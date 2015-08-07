var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("DEN");
      expect(zoo.location).toEqual("DEN");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual("The Zoo is open.");
          });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual("The Zoo is closed.");
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);

    });
  });

  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([]);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });
    it('should only add instances of animals', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });

    it('should not add duplicates', function(){

      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      expect(zoo.animals[0].name).toEqual(pig.name);
      expect(zoo.animals[1].name).toEqual(lion.name);

});
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      var originalPlace = zoo.animals.length;
      zoo.removeAnimal(lion);
      expect(zoo.animals.length).toEqual(originalPlace -1);
    });
  });
});
