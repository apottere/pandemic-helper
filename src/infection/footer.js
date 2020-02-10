import { createUseStyles } from 'react-jss';
import { useAppState } from '../state';
import { AlertTriangle, CapslockFill, SkipBackward, SkipForward, Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import React from 'react';

export const footerHeight = '60px';
const useStyles = createUseStyles({
    footer: {
        backgroundColor: '#f3f3f3',
        height: footerHeight,
        lineHeight: footerHeight,
        fontSize: '20px',
        boxSizing: 'border-box',
        borderTop: '1px solid #5f5f5f',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    key: {
        textAlign: 'center',
        flexGrow: 1,
        padding: '0 15px',
        borderRight: '1px solid #5f5f5f',

        '& > span': {
            '&:first-child': {
                paddingRight: '15px'
            },
            '&:last-child': {
                paddingLeft: '15px'
            },
            '& > svg': {
                marginBottom: '1px'
            }
        }
    },
    buttons: {
        padding: '0 15px',
        '& button': {
            marginRight: '5px',
            '&:last-child': {
                marginRight: 0
            }
        }
    }
});

export const Footer = () => {
    const [, setState] = useAppState();
    const styles = useStyles();

    return (
        <div className={`d-flex ${styles.footer}`}>
            <span className={`mr-auto text-muted ${styles.key}`}>
                <span><CapslockFill size={20} /> Infect</span>
                |
                <span><AlertTriangle size={20} /> Epidemic</span>
            </span>
            <span className={styles.buttons}>
                <Button variant="outline-primary" onClick={() => window.history.back()}><SkipBackward size={24} /></Button>
                <Button variant="outline-danger" onClick={() => setState({})}><Trash size={24} /></Button>
                <Button variant="outline-primary" onClick={() => window.history.forward()}><SkipForward size={24} /></Button>
            </span>
        </div>
    )
};
