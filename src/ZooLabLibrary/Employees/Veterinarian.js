import Employee from './Employee.js';
import Logger from '../Logger.js';
import Animal from '../Animals/Animal.js';

export default class Veterinarian extends Employee {
    constructor({ firstName, lastName, animalExperiences }) {
        super({ firstName, lastName, animalExperiences })
        Logger.writeLine('New Veterinarian created ' + this.ToString())
    }

    HealAnimal(animal) {
        if (animal instanceof Animal) {
            if (animal.IsSick && this.HasAnimalExperience(animal)){
                animal.IsSick = false;
                // Logger.WriteLine("The " + animal.constructor.prototype.name + " " + animal.ID
                //    + " was healed by Veterinarian " + this.ToString());
                return true;
            }
        }
        return false;
    }

}