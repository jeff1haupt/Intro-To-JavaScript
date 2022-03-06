class Car {
    constructor(make, model, msrp, mpg) {
        this.make = make;
        this.model = model;
        this.msrp = msrp;
        this.mpg = mpg;
    }
    describe() {
        return `The ${this.make} ${this.model} costs around ${this.msrp} and gets ${this.mpg} mpg`
    }
}

class Menu {
    constructor() {
        this.cars = []; // storing all of the Car objects we create 
    }
    mainMenu() {
        let choice = prompt(
            `
            1) Add a car 
            2) Delete a car 
            3) Update a car
            4) View all cars 
            0) Exit program 
            `
        )
        switch (choice) {
            case "1":
                this.addCar(); // don't forget 'this' keyword
                break;
            case "2":
                this.deleteCar();
                break;
            case "3":
                this.updateCar();
                break;
            case "4":
                this.viewCars();
                break;
            case "0":
                this.endProgram();
                break;
            default:
                this.mainMenu();
        }
    }
    addCar() {
        const newCar = new Car(
            prompt("Enter Make: "),
            prompt("Enter model: "),
            prompt("Enter MSRP: "),
            prompt("Enter MPG: ")
        )
        this.cars.push(newCar);
        alert("The car has been added");
        this.mainMenu();
    }

    deleteCar() {
        let carToDelete = prompt("Enter the id of the car to delete: ");
        let removedCar = this.cars.splice(parseInt(carToDelete), 1) // carToDelte is the index we want to remove from the array, and '1' is how many we want to remove 
        alert(`You removed ${removedCar.make} ${removedCar.model} from the list`);
        this.mainMenu()
    }

    viewCars() {
        let allCars = "";
        let i = 0;
        for(let car of this.cars) {
            allCars += `${i})` + car.describe() + "\n"
            i++;
        }
        alert(allCars);
        this.mainMenu();
    }
    endProgram() {
        alert("Goodbye!");
    }
}

const menu = new Menu();
menu.mainMenu();