import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


function ItemModal(props) {
    const { show, handlePropShow, fruit, src } = props;
    const handleClose = () => handlePropShow();

    return (
        <>
            <Modal show={props.show}
                animation={false}>
                    <Modal.Title>{fruit.name}</Modal.Title>
                <Modal.Body>
                    <img src={src} width="100" height="100" ></img>
                    <div>
                        <p>calories : {fruit.nutritions.calories}</p>
                        <p>carbohydrates : {fruit.nutritions.carbohydrates}</p>
                        <p>fat : {fruit.nutritions.fat}</p>
                        <p>protein : {fruit.nutritions.protein}</p>
                        <p>sugar : {fruit.nutritions.sugar}</p>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ItemModal