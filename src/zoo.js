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
Zoo.prototype.addAnimal = function(newAnimal){
  if(this.status === "open"){
        this.animals.push(newAnimal);
  }else{
    console.log("zoo is closed");
  }
};

module.exports = Zoo;
