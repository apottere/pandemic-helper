import React from 'react';
import { Infections } from './infection';
import { useAppState } from './state';
import { Initialize } from './config/init';

export const App = () => {
    const [game] = useAppState('game');

    if(!game && game !== 0) {
        return (<Initialize />)
    }

    return (<Infections />);
};
