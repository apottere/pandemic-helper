import React from 'react';
import { SaveConfig } from './save';
import { useEpidemicCountFormField, usePlayerCountFormField } from './form-fields';

const cities = () => [
    { name: 'Algiers', color: 'black', count: 1, },
    { name: 'Atlanta', color: 'blue', count: 1, },
    { name: 'Baghdad', color: 'black', count: 1, },
    { name: 'Bangkok', color: 'red', count: 1, },
    { name: 'Beijing', color: 'red', count: 1, },
    { name: 'Bogotá', color: 'yellow', count: 1, },
    { name: 'Buenos Aires', color: 'yellow', count: 1, },
    { name: 'Cairo', color: 'black', count: 1, },
    { name: 'Chennai', color: 'black', count: 1, },
    { name: 'Chicago', color: 'blue', count: 1, },
    { name: 'Delhi', color: 'black', count: 1, },
    { name: 'Essen', color: 'blue', count: 1, },
    { name: 'Ho Chi Minh City', color: 'red', count: 1, },
    { name: 'Hong Kong', color: 'red', count: 1, },
    { name: 'Istanbul', color: 'black', count: 1, },
    { name: 'Jakarta', color: 'red', count: 1, },
    { name: 'Johannesburg', color: 'yellow', count: 1, },
    { name: 'Karachi', color: 'black', count: 1, },
    { name: 'Khartoum', color: 'yellow', count: 1, },
    { name: 'Kinshasa', color: 'yellow', count: 1, },
    { name: 'Kolkata', color: 'black', count: 1, },
    { name: 'Lagos', color: 'yellow', count: 1, },
    { name: 'Lima', color: 'yellow', count: 1, },
    { name: 'London', color: 'blue', count: 1, },
    { name: 'Los Angeles', color: 'yellow', count: 1, },
    { name: 'Madrid', color: 'blue', count: 1, },
    { name: 'Manila', color: 'red', count: 1, },
    { name: 'Mexico City', color: 'yellow', count: 1, },
    { name: 'Miami', color: 'yellow', count: 1, },
    { name: 'Milan', color: 'blue', count: 1, },
    { name: 'Montréal', color: 'blue', count: 1, },
    { name: 'Moscow', color: 'black', count: 1, },
    { name: 'Mumbai', color: 'black', count: 1, },
    { name: 'New York', color: 'blue', count: 1, },
    { name: 'Osaka', color: 'red', count: 1, },
    { name: 'Paris', color: 'blue', count: 1, },
    { name: 'Riyadh', color: 'black', count: 1, },
    { name: 'San Francisco', color: 'blue', count: 1, },
    { name: 'Santiago', color: 'yellow', count: 1, },
    { name: 'São Paulo', color: 'yellow', count: 1, },
    { name: 'Seoul', color: 'red', count: 1, },
    { name: 'Shanghai', color: 'red', count: 1, },
    { name: 'St. Petersburg', color: 'blue', count: 1, },
    { name: 'Sydney', color: 'red', count: 1, },
    { name: 'Taipei', color: 'red', count: 1, },
    { name: 'Tehran', color: 'black', count: 1, },
    { name: 'Tokyo', color: 'red', count: 1, },
    { name: 'Washington', color: 'blue', count: 1, },
];

const Config = ({id}) => {
    const [players, PlayerCount] = usePlayerCountFormField();
    const [epidemics, EpidemicCount] = useEpidemicCountFormField(4, 6, 5);

    return (
        <>
            <PlayerCount />
            <EpidemicCount />
            <SaveConfig id={id} config={{
                players,
                epidemics
            }} />
        </>
    );
};

export const VanillaGame = {
    name: 'Vanilla',
    Config,
    cities
};
