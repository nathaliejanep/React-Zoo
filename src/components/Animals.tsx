import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimals()
    }, []);

    function getAnimals() {
        axios.get('https://animals.azurewebsites.net/api/animals')
            .then((response) => {
                console.log(response.data);
                // let apiAnimals = response.data.map((animal: IAnimal) => {
                //     return new Animal(animal.id, animal.name, animal.imageUrl, animal.isFed)
                // })
                setAnimals(response.data);
            });
    }

    let AnimalList = animals.map((animal: IAnimal, i) => {
        return (
            <li key={i}>
                <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
            </li>
        )
    })

    return (
        <ul>{AnimalList}</ul>
    );
}