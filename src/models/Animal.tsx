export class Animal {
    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public isFed: boolean,
        public lastFed: Date,
        public shortDescription: string) { }
}