import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        axios.get('https://animals.azurewebsites.net/api/animals')
            .then((response) => {
                if (!localStorage.getItem('lsAnimal')) {
                    localStorage.setItem('lsAnimal', JSON.stringify(response.data));
                }
                setAnimals(response.data);

            }).catch((error) => console.log(error));
    }, []);

    let AnimalList = animals.map((animal: Animal, i) => {
        let animalLink = `/animals/${animal.id}`;
        return (
            <li key={i}>
                <Link to={animalLink}>{animal.name}</Link>
            </li>
        )
    });

    return (
        <ul>{AnimalList}</ul>
    );
}