import React, { useEffect } from 'react'
// instalar: npm i query-string, usado para parsear el query del search
import queryString from 'query-string';

import { heroes_data } from '../../data/heroes'
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useMemo } from 'react';

export const SearchScreen = ({history, location}) => {


    // console.log(location.search);
    // console.log(queryString.parse(location.search));
    const {q=''} = queryString.parse(location.search);

    interface DormData{
        searchText: string;
    }
    
    const initialForm = {
        // searchText:''
        searchText:q
    };
    
    const { formulario, handleChange } = useForm<DormData>( initialForm );
    const {searchText} = formulario;
    
    // const heroesFiltrados = heroes_data;
    // const heroesFiltrados = getHeroesByName(searchText);
    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q])
    // Se hace uso del USEMEMO para que al cuando haya cambio de estado(escribir) no recargue automaticamente por cada letra
    // Sino que recargue la pagina solo cuando cambia el query (palabra de busqueda y le das al boton buscar)


    const handleSearch=(e)=>{
        e.preventDefault();
        // console.log(searchText);
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form action="" onSubmit={handleSearch}>
                        <input name="searchText" value={searchText} onChange={handleChange}
                                type="text"  placeholder="Busca tu heroe" className="form-control" />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '') &&
                            <div className="alert alert-info">
                                Buscar un heroe
                            </div>
                    }
                    {
                        (q !== '' && heroesFiltrados.length === 0) &&
                            <div className="alert alert-danger">
                                    No hay heroe encontrado
                            </div>
                    }
                    {
                        heroesFiltrados.map(heroe => (
                            <HeroCard key={heroe.id} {...heroe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
