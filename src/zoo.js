var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};
Zoo.prototype.open = function(){
  this.status = "open";
};
Zoo.prototype.isOpen = function(){
  if (this.status === "open"){
    return "The Zoo is open.";
  }else{
    return "The Zoo is closed.";
  }
};
Zoo.prototype.contains = function(newAnimal){
    var i = this.animals.length;
      while (i--){
        if (this.animals[i].name === newAnimal.name) {
          return true;
        }
      }
      return false;
};

Zoo.prototype.addAnimal = function(newAnimal){
  if(this.status === "open"){
    if (this.contains(newAnimal) === false){
        this.animals.push(newAnimal);
    }
  }
  else{
    return ("the zoo is closed");
  }
};
Zoo.prototype.removeAnimal = function(oldAnimal){
  i = this.animals.indexOf(oldAnimal);
  this.animals.splice(this.animals[i], 1);

};

module.exports = Zoo;
