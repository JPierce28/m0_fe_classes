// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name){
    this.color = "Silver";
    this.name = name;
  }
  say(newSay){
    this.say = (`*~* ${newSay} *~*`);
  }
}
var Unicorn1 = new Unicorn("Josh")

Unicorn1.say("hi")
console.log(Unicorn1)




// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name){
    this.name = name
    this.pet = "bat"
    this.thirsty = true
  }
  changePet(newPet){
    this.pet = newPet;
  }
    changeThirsty(newThirsty){
      this.thirsty = false
    }
}
var Vampire1 = new Vampire("Dracula")
Vampire1.changePet("dog")
Vampire1.changeThirsty()
console.log(Vampire1)

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
  class Dragon {
    constructor(name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.eat = (`${name} is hungry`)
    }
    changeEat(newEat){
      if(newEat <= 4){
      this.eat = (`${this.name} is no longer hungry`)
    }
    }

  }
  var Dragon1 = new Dragon("Drogon", "Khalessi", "Red")
  Dragon1.changeEat(4)
  console.log(Dragon1)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name, disposition,){
    this.name = name
    this.disposition = disposition
    this.age = 0
    this.Birthday = false
    this.isAdult = false
    this.isOld = false
    this.hasRing = false
  }
  celebrateBirthday(newYear){
    this.Birthday = true
    if(newYear = true){
      this.age = this.age + 1
  }
    if(this.age > 32){
      this.isAdult = true
    }
    if(this.age >= 101){
      this.isOld = true
    }
    if(this.name === "Frodo"){
      this.hasRing = true
    }
  }
}
var Hobbit1 = new Hobbit("Frodo")
Hobbit1.celebrateBirthday()
console.log(Hobbit1);
