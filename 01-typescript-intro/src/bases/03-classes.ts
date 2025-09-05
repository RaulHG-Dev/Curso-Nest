import axios from "axios";

export class Pokemon {
    // public id: number = 1;
    // public name: string = 'no-name';

    set setName(name: string) {
        this.name = name;
    }

    get getId(): number {
        return this.id;
    }

    // getters
    get getName(): string {
        return this.name;
    }

    // con el constructor se pueden inicializar las propiedades
    constructor(
        public readonly id: number, // readonly indica que no se puede modificar
        public name: string
    ) {}
    // constructor(id: number, name: string) {
    //     this.id = id;
    //     this.name = name;
    // }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    // métodos asíncronos
    async getMoves() {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`);

        return resp;
    }
}

export const charmanderInstance = new Pokemon(4, "Charmander");