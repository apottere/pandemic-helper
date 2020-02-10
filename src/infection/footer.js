import { createUseStyles } from 'react-jss';
import { useAppState } from '../state';
import { SkipBackward, SkipForward, Trash } from 'react-bootstrap-icons';
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
    buttons: {
        padding: '0 15px',
        flexGrow: 1,
        textAlign: 'center',
        '& button': {
            marginRight: '15px',
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
            <span className={styles.buttons}>
                <Button variant="outline-primary" onClick={() => window.history.back()}><SkipBackward size={24} /></Button>
                <Button variant="outline-danger" onClick={() => setState({})}><Trash size={24} /></Button>
                <Button variant="outline-primary" onClick={() => window.history.forward()}><SkipForward size={24} /></Button>
            </span>
        </div>
    )
};
