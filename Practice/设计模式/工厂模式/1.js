function createVehicle(type) {
  let vehicle;
  switch (type) {
      case 'car':
          vehicle = new Car();
          break;
      case 'bike':
          vehicle = new Bike();
          break;
      default:
          throw new Error('Unknown vehicle type');
  }
  return vehicle;
}

class Vehicle {
  move() {}
}

class Car extends Vehicle {
  move() {
      console.log("Car is moving");
  }
}

class Bike extends Vehicle {
  move() {
      console.log("Bike is moving");
  }
}

const car = createVehicle('car');
car.move(); // Car is moving

const bike = createVehicle('bike');
bike.move(); // Bike is moving