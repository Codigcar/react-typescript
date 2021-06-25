import { stringify } from 'querystring'
import React from 'react'
// type porque no se va a reutiliar ni extender, cosa contrario seria interface
type heroType = {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
    key:string;
}

export const HeroCard = (props:heroType) => {
    console.log(props.id);
    
    return (
        <div className="card ms-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${props.id}.jpg`} alt={props.superhero} className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5>{props.superhero}</h5>
                        <p>{props.alter_ego}</p>
                        {
                            (props.alter_ego !== props.characters) && <p className="card-text">{props.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{props.first_appearance}</small>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
