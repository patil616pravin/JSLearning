// Define a class for Vehicle
class Vehicle {
    constructor(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
    }
  }
  
  // Create 5 objects from Vehicle class and add them to an array
  const arrayOfVehicles = [
    new Vehicle("Toyota", "Camry", 2020, "Silver", 25000),
    new Vehicle("Honda", "Civic", 2019, "Blue", 30000),
    new Vehicle("Ford", "F-150", 2021, "Red", 15000),
    new Vehicle("Chevrolet", "Malibu", 2022, "White", 18000),
    new Vehicle("Nissan", "Altima", 2020, "Black", 22000),
  ];
  
  // Traverse the arrayOfVehicles and log the details
  for (const vehicle of arrayOfVehicles) {
    console.log(
      `Vehicle Details: Make - ${vehicle.make}, Model - ${vehicle.model}, Year - ${vehicle.year}, Color - ${vehicle.color}, Mileage - ${vehicle.mileage}`
    );
  }
  
  // Define a class for College
  class College {
    constructor(name, location, establishedYear, studentCount) {
      this.name = name;
      this.location = location;
      this.establishedYear = establishedYear;
      this.studentCount = studentCount;
    }
  
    // Method to display the complete object details
    display() {
      console.log(
        `College Details: Name - ${this.name}, Location - ${this.location}, Established Year - ${this.establishedYear}, Student Count - ${this.studentCount}`
      );
    }
  }
  
  // Create 4 objects from College class and invoke the display method for each object
  const college1 = new College("ABC College", "New York", 1990, 5000);
  const college2 = new College("XYZ College", "Los Angeles", 1985, 6000);
  const college3 = new College("PQR College", "Chicago", 2000, 4500);
  const college4 = new College("LMN College", "San Francisco", 1995, 5500);
  
  college1.display();
  college2.display();
  college3.display();
  college4.display();
  
  // Function to traverse an object and log its key-value pairs
  function traverseObject(obj) {
    for (const key in obj) {
      console.log(`${key} ${obj[key]}`);
    }
  }
  
  // Call traverseObject() function for each College object
  console.log("Traversing College objects:");
  traverseObject(college1);
  traverseObject(college2);
  traverseObject(college3);
  traverseObject(college4);
  