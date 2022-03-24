import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";
import { Button } from "./styles/Button";

export const InfoAnimal = () => {

    // const [animal, setAnimal] = useState<Animal[]>([]);
    const [fed, setFed] = useState(false);
    const [hungry, setHungry] = useState(false);
    let { id } = useParams();

    // useEffect(() => {
    //     getAnimal();
    // }, []);

    // function getAnimal() {
    //     setAnimal(lsAnimal)

    //     axios.get(`https://animals.azurewebsites.net/api/animals/`)
    //         .then((response) => {
    //             setAnimal(response.data);
    //             console.log(response.data);
    //         })
    //         .catch((error) => console.log(error));
    // }

    // if (!'lsAnimal') {
    //     localStorage.setItem('lsAnimal', JSON.stringify(animal));
    //     console.log("Works?");
    // }

    // localStorage.setItem('lsAnimal', JSON.stringify(animal));

    let lsAnimal = JSON.parse(localStorage.getItem('lsAnimal') || (''));

    const lessThan3HrAgo = (date: any) => {
        const threeHr = 3 * 1000 * 60 * 60;
        const threeHrAgo = Date.now() - threeHr;

        return date > threeHrAgo;
    }


    let AnimalInfo = lsAnimal.map((animal: Animal, i: number) => {


        if (i + 1 === +id!) {
            console.log(lessThan3HrAgo(new Date(animal.lastFed)));
            if (!lessThan3HrAgo(new Date(animal.lastFed))) {
                animal.isFed = false;
                // setHungry(true);
            }
            return (
                <>
                    <div key={i}>
                        <p>Name: {animal.name}</p>
                        <p>Is fed: {animal.isFed ? 'yes' : 'no'}</p>
                        <p>Last fed: {animal.lastFed}</p>
                        <img src={animal.imageUrl} alt="" width="300px" />
                        <p>{animal.shortDescription}</p>

                        {animal.isFed === false &&
                            <Button disabled={fed} onClick={feedAnimal} >
                                Feed {animal.name}
                            </Button>}

                        {animal.isFed === true &&
                            <>
                                <p>Not hungry</p>
                                <button disabled>
                                    Feed {animal.name}
                                </button>
                            </>}
                    </div>
                </>
            )
        } else return null //ändra varning

    })

    function feedAnimal() {
        let lsAnimal = JSON.parse(localStorage.getItem('lsAnimal') || (''));

        // for (let i = 0; i < lsAnimal.length; i++) {
        //     if (i + 1 === +id!) {
        //         console.log(lsAnimal[i]);
        //         let fed = lsAnimal[i].isFed = true
        //         setFed(fed);
        //         lsAnimal[i].lastFed = new Date();
        //         // lsAnimal[i].isFed = true;
        //         localStorage.setItem('lsAnimal', JSON.stringify(lsAnimal));
        //     }
        // } return (
        //     <div>{AnimalInfo}</div>
        // )

        lsAnimal.map((animal: Animal, i: number) => {
            if (i + 1 === +id!) {
                setFed(animal.isFed = true);
                animal.lastFed = new Date();

                // let dateFed = animal.lastFed;
                // dateFed.setHours(dateFed.getHours() - 3);
                // console.log(dateFed);
            }
            return <p>hej</p>//ändra varning
        })
        localStorage.setItem('lsAnimal', JSON.stringify(lsAnimal));
    }
    return (
        <div>{AnimalInfo}</div>
    );
}