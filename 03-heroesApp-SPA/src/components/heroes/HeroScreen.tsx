import { useMemo } from 'react';
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

type heroeType = {
    heroeId:string;
    superhero:string;
    alter_ego:string;
    first_appearance:string;
    characters: string;
    publisher: string;
}

export const HeroScreen = ({history}) => {

    // usar Hook useParams que extrae los parametros que va por URL
    const params = useParams<heroeType>();

    // Optimizar con UseMemo
    // const heroe = getHeroById(params.heroeId);
    const heroe = useMemo(() => getHeroById(params.heroeId), [params.heroeId])

    if(!heroe){
        return <Redirect to="/" />
    }

    const handleRun=()=>{

        // Validar si tiene página anterior a la cual regresar  o si fue accedido directamente desde un link
        if(history.length <= 2){
            history.push('/');
        } else {
            // Regresar a la página anterior
            history.goBack();
        }
    }

    console.log(heroe);
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${params.heroeId}.jpg`} alt={params.superhero} className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {heroe.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {heroe.publisher} </li>
                    <li className="list-group-item"> <b>First appearance:</b> {heroe.first_appearance} </li>
                </ul>

                <h5>Personaje</h5>
                <p>{heroe.characters}</p>
                <button onClick={handleRun} className="btn btn-outline-info">
                    Regresar
                </button>
            </div>
        </div>
    )
}
