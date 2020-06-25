import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { deleteCard, likeCard } from '../../Store/ActionCreators';
import './Card.css'
import ReactImageAppear from 'react-image-appear';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import LoadingGIF from '../../Assets/Images/loading.gif';
import EditCard from '../Dashboard/Edit/EditCard/EditCard';
import CardImg from '../../Assets/Images/card-img.jpeg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';



const card = (props) => {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [isLike, setisLike] = useState(false)

    useEffect(() => {
        if (props.isEdited) {
            setModal(false)
        }
        return () => {

        }
    }, [props.isEdited])

    console.log(props)
    console.log(props.imgName)


    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);

    const deleteCardHandler = (id, imgName) => {
        props.deleteC(id, imgName);
        toggle2();

    }

    console.log(props.isDelete)





    const likeColorPicker = () => {
        if (isLike) {
            return 'red'
        } else {
            return '#b7b7b7';
        }
    }

    const likeHandler = (id) => {
        setisLike(!isLike);
        let value = props.like
        if (!isLike) {
            value = props.like + 1;
        } else {
            value = props.like - 1;
        }
        props.likeC(id, value)
    }

    let likeColor = {
        color: likeColorPicker()
    }

    let cardButtom

    if (props.user === "user") {

        cardButtom = (
            <div className="like-div">
                <p className="like-message">{props.name}</p>
            </div>
        )

    } else if (props.user === "admin") {
        cardButtom = (
            <div className="control-div">
                <button onClick={toggle} className="control-buttons edit-card-button">Edit</button>
                <button onClick={toggle2} className="control-buttons delete-card-button">Delete</button>

                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Edit Card</ModalHeader>
                    <ModalBody>
                        <EditCard id={props.id} toggleSubmit2={toggle} type="edit" {...props} />
                    </ModalBody>

                </Modal>

                <Modal isOpen={modal2} toggle={toggle2}>
                    <ModalHeader toggle={toggle2}>Delete Card</ModalHeader>
                    <ModalBody>
                        Are you sure you want to DELETE this card?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => deleteCardHandler(props.id, props.imgName)}>Yes</Button>{' '}
                        <Button color="secondary" onClick={toggle2}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )

    }

    console.log('imgurl', props.imgURL)



    return (
        <div className="card-main-div">
            <ToastsContainer store={ToastsStore} />
            <div className="card">
                <div onClick={() => props.openDetailsPage(props.id)} className="img-div">
                    <img className="card-img" src={props.imgURL} />
                    {/* <ReactImageAppear
                        className="card-img"
                        src={props.imgURL}
                        animation="fadeIn"
                        animationDuration="0.5s"
                    /> */}
                </div>
                {cardButtom}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isDelete: state.ui.isDelete,
        isEdited: state.ui.isEdited
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDetailsPage: (id) => dispatch({ type: 'OPEN_DETAIL_PAGE', id: id }),
        deleteC: (id, imgName) => dispatch(deleteCard(id, imgName)),
        likeC: (id, val) => dispatch(likeCard(id, val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(card);