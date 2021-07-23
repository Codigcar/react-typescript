import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../../components/helpers/HeroesById';

interface heroeInterface {
    heroeId:string;
    superhero:string;
    alter_ego:string;
    first_appearance:string;
    characters: string;
    publisher: string;
}

export const ItemHeroeScreen = ({history}:any) => {

    const {heroeId} = useParams<heroeInterface>();
    const heroe =  getHeroesById(heroeId);
 
    const handleButton = () => {
        history.goBack();
    }
    return (
        <div className="card-item-heroe">
            <img src={`../assets/heroes/${heroeId}.jpg`} alt="" />
            <div className="card-item-heroe-info">
                <h1>heroe.superhero</h1>
                <hr />
                <p>Alter ego: {heroe?.alter_ego}</p>
                <hr />
                <p>Publisher: {heroe?.publisher}</p>
                <hr />
                <p>First appearance: {heroe?.first_appearance}</p>
                <hr />
                <h3>Personaje: {heroe?.alter_ego}</h3>
                <button onClick={handleButton}>Regresar</button>
            </div>
        </div>
    )
}
