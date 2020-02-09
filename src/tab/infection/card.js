import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AlertTriangle, ArrowClockwise, CapslockFill, ThreeDotsVertical, TrashFill } from 'react-bootstrap-icons';

export const Card = ({ card, infect, epidemic, remove, unremove, showEpidemic, showDraw }) => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const { city, id, count } = card;
    const { color, name, count: total } = city;

    const closeWithAction = (fn) => () => {
        handleCloseModal();
        fn(id);
    };

    const modalButtons = [];
    if(epidemic && !showEpidemic) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='success'
                                   onClick={closeWithAction(epidemic)}><AlertTriangle size={26}/> Force
            Epidemic</Button>))
    }
    if(infect && !showDraw) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='primary'
                                   onClick={closeWithAction(infect)}><CapslockFill size={26}/> Force Draw</Button>))
    }
    if(remove) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='danger'
                                   onClick={closeWithAction(remove)}><TrashFill size={26}/> Remove from Play</Button>))
    }
    if(unremove) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='primary'
                                   onClick={closeWithAction(unremove)}><ArrowClockwise size={26}/> Return to
            Play</Button>))
    }

    const hasModalButtons = modalButtons.length !== 0;
    const nameSection = (<span className='mr-auto p-2'>{name}</span>);
    const countSection = (<span className='p-2'><span>{count}</span><span className='text-muted'> / </span><span
        className='text-muted'>{total}</span></span>);

    return (
        <div className={`d-flex infection-deck-card infection-group-${color}`}>
            {nameSection}
            {countSection}
            {showEpidemic && epidemic &&
            <span className='p-2'><Button variant='success' size='xs' onClick={() => epidemic(id)}><AlertTriangle
                size={18}/></Button></span>}
            {showDraw && infect && <span className='p-2'><Button size='xs' onClick={() => infect(id)}><CapslockFill
                size={18}/></Button></span>}
            {hasModalButtons &&
            <span className='p-2 infection-deck-card-extra'><Button variant='secondary-outline' size='xs'
                                                                    onClick={handleShowModal}><ThreeDotsVertical
                size={18}/></Button></span>}
            {hasModalButtons && <Modal show={hasModalButtons && showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Additional Actions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`d-flex infection-deck-card infection-group-${color}`}>
                        {nameSection}
                        {countSection}
                    </div>
                    {modalButtons.map((button, i) => (<div key={i}>{button}</div>))}
                </Modal.Body>
            </Modal>}
        </div>
    );
};
