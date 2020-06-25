import React from 'react'
import './ClientPage.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Spinner } from 'reactstrap';
import Anime from 'react-anime';



import Card from '../Card/Card';
import Header from '../Header/Header';
import Details from './Details/Details';


const clientPage = (props) => {

    console.log(props.test)


    let card = <div><Spinner style={{ width: '4rem', height: '4rem' }} type="grow" color="light" /></div>
    if (props.cardsData !== undefined) {
        card = props.cardsData.map((card, index) => {

            return (
                <Anime easing="easeOutBounce"
                    duration={500}
                    scale={[.9, 1]}>
                    <Card key={card.id} imgName={card.imgName} imgURL={card.imgURL} name={card.templateName} user="user" id={card.id} />
                </Anime>
            )
        })
    } else {
        card = <div><Spinner style={{ width: '4rem', height: '4rem' }} type="grow" color="light" /></div>
    }

    return (
        <div className="clientpage-main-div">
            <Header title="Status" user="user" />
            {props.isClientCardsPageOpen ? <div className="cards-super-div">
                <h5 className="title">Cards</h5>
                <div className="cards-div">
                    {card}
                </div>
            </div> : null}
            {props.isCardDetailsPageOpen ? <Anime easing="easeInElastic"
                duration={1500}

                direction="reverse"

                translateX='-30rem'

            ><Details /></Anime> : null
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        isClientCardsPageOpen: state.ui.isClientCardsPageOpen,
        isCardDetailsPageOpen: state.ui.isCardDetailsPageOpen,
        cardsData: state.firestore.ordered.cards,
        test: state.firestore
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cards' }
    ])
)(clientPage);