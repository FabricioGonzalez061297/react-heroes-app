import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h2>Marrvel screen</h2>
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}
