import React from 'react'
import { heroes_data } from '../../data/heroes'
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const heroesFiltrados = heroes_data;

    interface DormData{
        searchText: string;
    }

    const initialForm = {
        searchText:''
    };

    const { formulario, handleChange } = useForm<DormData>( initialForm );
    const {searchText} = formulario;

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(searchText);
        
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
                        heroesFiltrados.map(heroe => (
                            <HeroCard key={heroe.id} {...heroe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
