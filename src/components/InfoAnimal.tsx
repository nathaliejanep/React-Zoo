import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";

export const InfoAnimal = () => {

    const [fed, setFed] = useState(false);
    const [hungry, setHungry] = useState(Boolean);
    //Ändra till animal
    const [lsAnimal, setAnimal] = useState<Animal[]>([]);

    let { id } = useParams();

    useEffect(() => {
        let lsAnimal = (localStorage.getItem('lsAnimal'));
        if (lsAnimal) {
            setAnimal(JSON.parse(lsAnimal))
        }
    }, []);

    useEffect(() => {
        for (let i = 0; i < lsAnimal.length; i++) {
            if (i + 1 === +id!) {
                let currentDate = new Date().getTime();
                let fedDate = new Date(lsAnimal[i].lastFed).getTime();
                let count = Math.floor((currentDate - fedDate) / (1000 * 60 * 60));

                if (count >= 3) {
                    setHungry(true)
                    lsAnimal[i].isFed = false
                } else if (count <= 3) {
                    setHungry(false)
                    lsAnimal[i].isFed = true;
                }

            }
        }
        localStorage.setItem('lsAnimal', JSON.stringify(lsAnimal));

    }, [lsAnimal, id]);

    // let lsAnimal = JSON.parse(localStorage.getItem('lsAnimal') || (''));

    // const lessThan3HrAgo = (date: any) => {
    //     const threeHr = 3 * 1000 * 60 * 60;
    //     const threeHrAgo = Date.now() - threeHr;
    //     return date > threeHrAgo;
    // }

    let AnimalInfo = lsAnimal.map((animal: Animal, i: number) => {
        if (i + 1 === +id!) {
            let animalDate = animal.lastFed
            animalDate = new Date(animalDate)

            return (
                <div key={i}>
                    <h2>{animal.name}</h2>
                    <p>{animal.shortDescription}</p>
                    <img src={animal.imageUrl} alt="" width="300px" />


                    <p>Last fed: {animalDate.toLocaleString()}</p>


                    {hungry === true &&
                        <p>{animal.name} have not been fed for the last 3 hours.</p>}

                    <p>{animal.isFed ? 'Is not hungry' : 'Is hungry'}</p>
                    {animal.isFed === false &&
                        <button disabled={fed} onClick={feedAnimal} >
                            Feed {animal.name}
                        </button>}

                    {animal.isFed === true &&

                        <button disabled>
                            Feed {animal.name}
                        </button>
                    }
                </div>

            )
        } return null

    })

    function feedAnimal() {
        // let lsAnimal = JSON.parse(localStorage.getItem('lsAnimal') || (''));

        for (let i = 0; i < lsAnimal.length; i++) {
            if (i + 1 === +id!) {
                console.log('fed');

                setFed(lsAnimal[i].isFed = true);
                lsAnimal[i].lastFed = new Date();


            }
        }

        // lsAnimal.map((animal: Animal, i: number) => {
        //     if (i + 1 === +id!) {
        //         setFed(animal.isFed = true);
        //         animal.lastFed = new Date();
        //     }
        //     return <div>{AnimalInfo}</div>
        // })
        localStorage.setItem('lsAnimal', JSON.stringify(lsAnimal));
    }
    return (
        <div>{AnimalInfo}</div>
    );
}