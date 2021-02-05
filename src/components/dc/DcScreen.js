import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h2>Dc screen</h2>
            <hr></hr>

            <HeroesList publisher="DC Comics" />
        </div>
    )
}
