import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";
import { Img } from "./styles/Img";

export const InfoAnimal = () => {
    const [fed, setFed] = useState(false);
    const [hungry, setHungry] = useState(Boolean);
    const [animal, setAnimal] = useState<Animal[]>([]);

    let { id } = useParams();

    useEffect(() => {
        let lsAnimal = (localStorage.getItem('lsAnimal'));
        if (lsAnimal) {
            setAnimal(JSON.parse(lsAnimal))
        }
    }, []);

    useEffect(() => {
        for (let i = 0; i < animal.length; i++) {
            if (i + 1 === +id!) {
                let currentDate = new Date().getTime();
                let fedDate = new Date(animal[i].lastFed).getTime();
                let count = Math.floor((currentDate - fedDate) / (1000 * 60 * 60));

                if (count >= 3) {
                    setHungry(true);
                    animal[i].isFed = false

                } else if (count <= 3) {
                    setHungry(false);
                    animal[i].isFed = true;
                }
            }
        }
        localStorage.setItem('lsAnimal', JSON.stringify(animal));
    }, [animal, id]);

    function feedAnimal() {
        for (let i = 0; i < animal.length; i++) {
            if (i + 1 === +id!) {
                setFed(animal[i].isFed = true);
                animal[i].lastFed = new Date();
                setHungry(false)
            }
        }
        localStorage.setItem('lsAnimal', JSON.stringify(animal));
    }

    let AnimalInfo = animal.map((animal: Animal, i: number) => {
        if (i + 1 === +id!) {
            // Convert date
            let animalDate = animal.lastFed;
            animalDate = new Date(animalDate);

            return (
                <div key={i}>
                    <h2>{animal.name}</h2>
                    <p>{animal.shortDescription}</p>
                    <Img src={animal.imageUrl} alt="Animal picture" />

                    <p>Last fed: {animalDate.toLocaleString()}</p>

                    <p>{animal.isFed ? 'Is not hungry and'
                        : 'Is hungry and'}</p>

                    <p>{hungry ? 'have not been fed within the last three hours'
                        : 'have been fed within the last three hours'}</p>

                    {animal.isFed === false &&
                        <button disabled={fed} onClick={feedAnimal} >Feed {animal.name}</button>}

                    {animal.isFed === true &&
                        <button disabled>Feed {animal.name}</button>}
                </div>
            )
        } return null
    });
    return (
        <div>{AnimalInfo}</div>
    );
}