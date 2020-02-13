import React, { useState } from 'react';
import { SaveConfig } from './save';
import { useEpidemicCountFormField, usePlayerCountFormField } from './form-fields';
import { Col, Form } from 'react-bootstrap';

const startingCities = [
    { name: 'Cairo', color: 'black', count: 3, },
    { name: 'Istanbul', color: 'black', count: 3, },
    { name: 'Jacksonville', color: 'yellow', count: 3, },
    { name: 'Lagos', color: 'yellow', count: 3, },
    { name: 'London', color: 'blue', count: 3, },
    { name: 'New York', color: 'blue', count: 3, },
    { name: 'São Paulo', color: 'yellow', count: 3, },
    { name: 'Tripoli', color: 'black', count: 3, },
    { name: 'Washington', color: 'blue', count: 3, },
];

const allRecons = [
    {
        name: 'North America',
        cities: [
            { name: 'Atlanta', color: 'blue', count: 1, },
            { name: 'Chicago', color: 'blue', count: 2, },
            { name: 'Denver', color: 'blue', count: 1, },
            { name: 'Los Angeles', color: 'yellow', count: 1, },
            { name: 'Mexico City', color: 'yellow', count: 1, },
            { name: 'San Francisco', color: 'blue', count: 2, },
        ]
    },
    {
        name: 'South America',
        cities: [
            { name: 'Bogotá', color: 'yellow', count: 2, },
            { name: 'Buenos Aires', color: 'yellow', count: 2, },
            { name: 'Lima', color: 'yellow', count: 1, },
            { name: 'Santiago', color: 'yellow', count: 1, },
        ]
    },
    {
        name: 'Europe',
        cities: [
            { name: 'Frankfurt', color: 'blue', count: 2, },
            { name: 'Moscow', color: 'black', count: 1, },
            { name: 'Paris', color: 'blue', count: 2, },
            { name: 'St. Petersburg', color: 'blue', count: 1, },
        ]
    },
    {
        name: 'Africa',
        cities: [
            { name: 'Antananarivo', color: 'black', count: 2, },
            { name: 'Dar es Salaam', color: 'yellow', count: 2, },
            { name: 'Johannesburg', color: 'blue', count: 2, },
            { name: 'Khartoum', color: 'yellow', count: 1, },
            { name: 'Kinshasa', color: 'yellow', count: 1, },
        ]
    }
];

const cities = ({ recons }) => {
    const enabledCities = Object.entries(recons).flatMap(([reconId, connected]) => {
        return allRecons[reconId].cities.filter((_, id) => connected.includes(id));
    });

    return startingCities.concat(enabledCities).sort((a, b) => a.name.localeCompare(b.name));
};

const Config = ({ id: gameId }) => {
    const [players, PlayerCount] = usePlayerCountFormField();
    const [epidemics, EpidemicCount] = useEpidemicCountFormField(1, 20, 5);
    const [recons, setRecons] = useState({});
    const possibleRecons = allRecons;

    const isReconEnabled = (id) => !!recons[id];

    const toggleRecon = (id) => {
        if(isReconEnabled(id)) {
            delete recons[id];
            setRecons({
                ...recons
            });
        } else {
            setRecons({
                ...recons,
                [id]: allRecons[id].cities.map((_, i) => i)
            })
        }
    };

    const potentialCities = Object.keys(recons).flatMap(reconId => {
        return possibleRecons[reconId].cities.map((city, id) => ({
            reconId,
            id,
            city
        }))
    });

    potentialCities.sort((a, b) => a.city.name.localeCompare(b.city.name));

    const isCityConnected = (reconId, id) => recons[reconId].includes(id);
    const toggleCity = (reconId, id) => {
        if(isCityConnected(reconId, id)) {
            recons[reconId] = recons[reconId].filter(cityId => cityId !== id);
            setRecons({
                ...recons
            });
        } else {
            recons[reconId] = recons[reconId].concat([id]);
            setRecons({
                ...recons
            });
        }
    };

    return (
        <>
            <PlayerCount />
            <EpidemicCount />
            <Form.Row className='mb-3'>
                <Form.Label column xs='8'>Recons Completed</Form.Label>
                <Col xs='4'>
                    {possibleRecons.map((recon, i) => (
                        <Form.Group key={i} controlId={`init.game-config.recons.${i}`} className='mb-1'>
                            <Form.Check type='switch' label={recon.name} checked={isReconEnabled(i)} onChange={() => toggleRecon(i)} />
                        </Form.Group>
                    ))}
                </Col>
            </Form.Row>
            {potentialCities.length > 0 && <Form.Row className='mb-3'>
                <Form.Label column xs='8'>Cities Connected</Form.Label>
                <Col xs='4'>
                    {potentialCities.map(({ reconId, id, city }) => (
                        <Form.Group key={`${reconId}.${id}`} controlId={`init.game-config.cities.${reconId}.${id}`} className='mb-1'>
                            <Form.Check type='switch' label={city.name} checked={isCityConnected(reconId, id)} onChange={() => toggleCity(reconId, id)} />
                        </Form.Group>
                    ))}
                </Col>
            </Form.Row>}
            <SaveConfig id={gameId} config={{
                players,
                epidemics,
                recons
            }} />
        </>
    );
};

export const Legacy2Game = {
    name: 'Legacy Season 2',
    Config,
    cities
};
