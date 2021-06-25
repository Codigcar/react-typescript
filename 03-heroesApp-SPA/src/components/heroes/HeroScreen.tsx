import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

type heroeType = {
    heroeId:string;
    superhero:string;
    alter_ego:string;
    first_appearance;
    characters;
}

export const HeroScreen = () => {

    // usar Hook useParams que extrae los parametros que va por URL
    const params = useParams<heroeType>();
    const heroe = getHeroById(params.heroeId);

    if(!heroe){
        return <Redirect to="/" />
    }
    console.log(params.heroeId);
    
    return (
        <div>
        </div>
    )
}
