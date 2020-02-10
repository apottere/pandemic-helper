import React from 'react';
import { Infections } from './tab/infection';
import { Button, Form, Navbar } from 'react-bootstrap';
import { useAppState } from './state';
import { Initialize } from './config/init';
import { SkipBackward, Trash } from 'react-bootstrap-icons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    nav: {
        borderBottom: '1px solid #5f5f5f',
        backgroundColor: '#f3f3f3',
    },
    navButtons: {
        '& button': {
            marginRight: '3px'
        }
    }
});

export const App = () => {
    const styles = useStyles();
    const [game] = useAppState('game');
    const [, setState] = useAppState();

    if(!game && game !== 0) {
        return (<Initialize />)
    }

    return (
        <>
            <Navbar className={styles.nav}>
                <Navbar.Brand className='mr-auto'>Pandemic Helper</Navbar.Brand>
                <Form inline className={styles.navButtons}>
                    <Button variant="outline-primary" onClick={() => window.history.back()}><SkipBackward size={24} /></Button>
                    <Button variant="outline-danger" onClick={() => setState({})}><Trash size={24} /></Button>
                </Form>
            </Navbar>
            <Infections />
        </>
    );
};
