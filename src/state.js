import React, { useEffect, createContext, useContext, useState } from 'react';

const readBrowserHash = () => {
    const hash = window.location.hash;
    if(!hash) {
        return {}
    }

    return JSON.parse(Buffer.from(hash, 'base64').toString());
};
const writeBrowserHash = (obj) => window.location.hash = Buffer.from(JSON.stringify(obj)).toString("base64");

const context = createContext(undefined);

export const AppStateProvider = ({children}) => {
    const [state, setState] = useState(readBrowserHash());
    console.log(state);
    const { Provider } = context;
    return (
        <Provider value={[state, setState]}>{children}</Provider>
    );
};

export const useAppState = (key, defaultValueFn) => {
    const [state, setState] = useContext(context);
    const updateHash = (obj) => {
        writeBrowserHash(obj);
    };

    useEffect(() => {
        const listener = () => setState(readBrowserHash());

        window.addEventListener('hashchange', listener);
        return () => window.removeEventListener('hashchange', listener);
    });

    const actualState = !key ? state : state[key];
    const updateState = !key ? (newState) => updateHash(newState) : (newSubState) => {
        const newState = {
            ...state,
            [key]: newSubState
        };
        updateHash(newState)
    };

    return [actualState === undefined && defaultValueFn ? defaultValueFn() : actualState, updateState]
};
