import React from 'react';
import { Infection } from './view/infection';
import { Tab, Tabs } from 'react-bootstrap';
import { useAppState } from './state';


export const App = () => {
    const [navigation, setNavigation] = useAppState('navigation');
    if(!navigation) {
        setNavigation('/infection');
        return (<></>);
    }

    return (
        <Tabs id='navigation' activeKey={navigation} onSelect={k => setNavigation(k)}>
            <Tab eventKey="/infection" title="Infection">
                <Infection />
            </Tab>
            <Tab eventKey="/player-cards" title="Player Cards">
                <div>todo</div>
            </Tab>
        </Tabs>
    );
};
