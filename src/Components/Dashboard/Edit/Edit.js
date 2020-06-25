import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';


import './Edit.css'

import Card from '../../Card/Card';
import EditCard from './EditCard/EditCard';

const edit = (props) => {
    console.log('isAdded')

    console.log(props.cardsData)

    const [modal, setModal] = useState(false);


    const modalOn = () => {
        setModal(true)
    }

    const modalOff = () => {
        setModal(false)
    }

    useEffect(() => {
        if (props.isDelete) {
            ToastsStore.info("Card Deleted")
        } else {

        }
        return () => {
            props.isDeletedFalse()
        }
    }, [props.isDelete])

    useEffect(() => {
        if (props.isEdited) {

            ToastsStore.info("Card Edited")
        } else {
            console.log('Nahi')
        }
        return () => {
            props.isDeletedFalse()
        }
    }, [props.isEdited])


    useEffect(() => {
        if (props.isAdded) {
            setModal(false)
            ToastsStore.info("Card Added")
        } else {
            console.log('Nahi')

        }
        return () => {
            props.isDeletedFalse()
        }
    }, [props.isAdded])

    let spinnerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    let card = <div style={spinnerStyle}><Spinner style={{ width: '4rem', height: '4rem' }} type="grow" color="light" /></div>
    if (props.cardsData !== undefined) {
        card = props.cardsData.map((card) => {
            return (<Card imgName={card.imgName} imgURL={card.imgURL} user="admin" name={card.templateName} category={card.category} price={card.price} des={card.des} id={card.id} />)
        })
    } else {
        card = <div style={spinnerStyle}><Spinner style={{ width: '4rem', height: '4rem' }} type="grow" color="light" /></div>
    }


    console.log(card)








    //const 

    return (
        <div className="edit-main-div">
            <ToastsContainer store={ToastsStore} />

            <div onClick={modalOn} className="add-new-card">
                <p style={{ fontSize: '8em', padding: '0', margin: '0' }}>+</p>
                <p className="add-card-title"> Add Card</p>
            </div>

            {card}

            <Modal isOpen={modal} toggle={modalOff} >
                <ModalHeader toggle={modalOff}>Add Card</ModalHeader>
                <ModalBody>
                    <EditCard type="add" modalOff={modalOff} />
                </ModalBody>
            </Modal>

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        cardsData: state.firestore.ordered.cards,
        isAdded: state.ui.isCardAddedSuccess,
        isDelete: state.ui.isDelete,
        isEdited: state.ui.isEdited
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isDeletedFalse: () => dispatch({ type: 'DELETED_FALSE' })
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'cards' }
    ])
)(edit);