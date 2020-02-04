import React from 'react';
import { SaveConfig } from './save';
import { useEpidemicCountFormField } from './form-fields';

const cities = [
];

const Config = ({id}) => {
    const [epidemics, EpidemicCount] = useEpidemicCountFormField(1, 20, 5);

    return (
        <>
            <EpidemicCount />
            <SaveConfig id={id} config={{
                epidemics
            }} />
        </>
    );
};

export const Legacy2Game = {
    name: 'Legacy Season 2',
    Config,
    cities
};
