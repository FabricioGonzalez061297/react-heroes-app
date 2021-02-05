import React, { useState } from 'react'

import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const [heroesFiltered, setHeroesFiltered] = useState([])
    const { q = '' } = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });


    const { searchText } = formValues;


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        const heroesFiltered = getHeroesByName(searchText);
        setHeroesFiltered(heroesFiltered);

    }

    return (
        <div>
            <h1>Search scren</h1>
            <hr></hr>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h4>Form search</h4>
                    <hr></hr>
                    <form onSubmit={handleSearch} >
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <div className="d-grid gap-2">

                            <button type="submit"
                                className="btn mt-2 btn-block btn-outline-primary"
                            >

                                Search...
                                </button>
                        </div>

                    </form>
                </div>

                <div className="col-md-7 col-sm-12">
                    <h4> Resuts </h4>
                    <hr></hr>

                    {
                        q === ''
                        &&
                        <div className="row">
                            <div className="col-md-12 alert alert-info text-center">search a heroe</div>
                        </div>

                    }

                    {
                        q !== '' && heroesFiltered.length === 0
                        &&
                        <div className="row">
                            <div className="col-md-12 alert alert-danger text-center">There is no  hero with {q} </div>
                        </div>

                    }




                    {
                        (heroesFiltered.length > 0)
                        &&

                        <div className="row row-cols-2 row-cols-md-3 g-4">
                            {
                                heroesFiltered.map(hero => (
                                    <HeroCard key={hero.id} {...hero} />
                                ))
                            }

                        </div>
                    }






                </div>
            </div>
        </div>
    )
}
