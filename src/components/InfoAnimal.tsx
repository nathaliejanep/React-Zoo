import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";
import { IAnimal } from "../models/IAnimal";

export const InfoAnimal = () => {

    const [animal, setAnimal] = useState<Animal[]>([]);
    const [fed, setFed] = useState(false);

    let { id } = useParams();
    console.log(`https://animals.azurewebsites.net/api/animals/${id}`);

    useEffect(() => {
        getAnimal();
    }, []);

    // let lsAnimal = JSON.parse(localStorage.getItem('lsAnimal') || (''));

    function getAnimal() {
        axios.get(`https://animals.azurewebsites.net/api/animals/`)
            .then((response) => {
                setAnimal(response.data);
                console.log(response.data);

                // localStorage.setItem('lsAnimal', JSON.stringify(response.data));

            })
            .catch((error) => console.log(error));
    }





    let AnimalInfo = animal.map((animal: IAnimal, i: number) => {
        if (i + 1 === +id!) {

            return (
                <>
                    <div key={i}>
                        <p>Name: {animal.name}</p>
                        <p>Is fed: {animal.isFed ? 'yes' : 'no'}</p>
                        <p>Last fed: {animal.lastFed}</p>
                        <img src={animal.imageUrl} alt="" width="300px" />
                        <p>{animal.shortDescription}</p>
                        <button onClick={feedAnimal} >Feed {animal.name}</button>
                    </div>
                </>
            )
        } else return null //ändra varning

    })

    function feedAnimal() {
        animal.map((animal: IAnimal, i: number) => {
            if (i + 1 === +id!) {

                let fed = animal.isFed = true
                setFed(fed);
                animal.lastFed = new Date()
                // localStorage.setItem('lsAnimal', JSON.stringify(lsAnimal));
            }

        })

    }



    return (
        <div>{AnimalInfo}</div>
    );

    // let animalInfo = Object.entries(animal).map(([key, value]) => {
    //     return (
    //         <li key={key}>
    //             {key}: {value}
    //         </li>
    //     );
    // });
    // console.log(animalInfo);
}