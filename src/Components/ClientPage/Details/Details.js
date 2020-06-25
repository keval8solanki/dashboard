import React from 'react'
import './Details.css'
import CloseIcon from '../../../Assets/Icons/close.svg';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';

import CardImg from '../../../Assets/Images/card-img.jpeg';

import { Button } from 'reactstrap';

const details = (props) => {

    let card = [];
    if (props.cardsData !== undefined) {

        for (let i = 0; i < props.cardsData.length; i++) {
            if (props.cardsData[i].id === props.id) {
                console.log('found')
                card.push(props.cardsData[i])
            }
        }

    } else {
        card = []
    }
    card = card[0]


    return (
        <div className="super-div">
            <ToastsContainer store={ToastsStore} />
            <button onClick={props.closeDetails} className="close-button">X</button>
            <div className="details-main-div">

                <div className="image-div">
                    <img className="card-image" src={card.imgURL}></img>
                </div>
                <div className="detail-div">
                    <h2 className="default name" >{card.templateName}</h2>
                    <p className="default details">{card.des}</p>
                    <p className="default category"><span className="label">Category: </span>{card.category}</p>
                    <p className="default price"><span>Rs.</span>{card.price}<span>/-</span></p>
                    <Button onClick={() => ToastsStore.success("Thankyou for showing interest, this is just a demo website real one is coming soon :)")} color="success">Order</Button>
                </div>

            </div >
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.ui.detailsPageID)
    return {
        id: state.ui.detailsPageID,
        cardsData: state.firestore.ordered.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDetails: () => dispatch({ type: 'CLOSE_DETAILS' })
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'cards' }
    ])
)(details);