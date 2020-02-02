import { useState, useEffect } from 'react';

const readBrowserHash = () => {
    const hash = window.location.hash;
    if(!hash) {
        return {}
    }

    return JSON.parse(Buffer.from(hash, 'base64').toString());
};
const writeBrowserHash = (obj) => window.location.hash = Buffer.from(JSON.stringify(obj)).toString("base64");

export const useAppState = (key, defaultValue) => {
    const [state, setState] = useState(readBrowserHash());
    const updateHash = (obj) => {
        writeBrowserHash(obj);
        setState(obj);
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

    return [actualState || defaultValue, updateState]
};
