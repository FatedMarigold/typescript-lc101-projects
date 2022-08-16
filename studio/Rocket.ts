import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]; 
    astronauts: Astronaut[];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    }

    sumMass (items: Payload[]): number {
        let sumMass = 0;

        for (let i=0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    }

    currentMassKg (): number {
        let currentMass: number = 0;
        currentMass =  this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    }

    canAdd (item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut () {

    }

}