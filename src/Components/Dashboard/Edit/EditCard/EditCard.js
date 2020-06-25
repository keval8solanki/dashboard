import React, { useState } from 'react'
import { addCard, editCardFirebase, storeCardImg } from '../../../../Store/ActionCreators';
import { Spinner } from 'reactstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import imageCompression from 'browser-image-compression';


import './EditCard.css'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Tooltip } from 'reactstrap';
const editCard = (props) => {

    let isAdded = props.isAdded;


    const [templateName, settemplateName] = useState(props.name || '')
    const [category, setcategory] = useState(props.category || '')
    const [price, setprice] = useState(props.price || '')
    const [des, setdes] = useState(props.des || '')
    const [errorColor, seterrorColor] = useState('black')
    const [addClicked, setaddClicked] = useState(false)
    const [isEditDisabled, setisEditDisabled] = useState(false)
    const [editClicked, seteditClicked] = useState(false)
    const [toogleTips, settoogleTips] = useState(false)


    // UPLOAD IMAGE AREA------------------------------------------------------


    const [imageAsFile, setImageAsFile] = useState('')

    const checkImageFormat = (imageFile) => {
        if (typeof imageFile === 'object') {
            return imageFile.type.includes("image")
        } else if (typeof imageFile === 'undefined') {
            return false
        } else {
            return false
        }
    }

    const handleImageAsFile = (e) => {
        setaddClicked(false)
        seteditClicked(false)
        props.isAddedFalse()
        props.isEditedFalse()
        const image = e.target.files[0]
        // Compression code

        // console.log('originalFile instanceof Blob', image instanceof Blob); // true
        // console.log(`originalFile size ${image.size / 1024 / 1024} MB`);

        // var options = {
        //     maxSizeMB: 1
        // }
        // try {
        //     const compressedFile = imageCompression(image, options);
        //     console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        //     console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        //     // console.log(compressedFile); // write your own logic
        // } catch (error) {
        //     console.log(error);
        // }

        // --------
        setImageAsFile(image)
        console.log(image)
        if (!checkImageFormat(image)) {
            ToastsStore.info("Please Upload file in image format only!")
            seterrorColor('red')
            setisEditDisabled(true)
        } else {
            seterrorColor('green')
        }
    }
    console.log(isEditDisabled)

    //------------------------------------------------------------------------



    const storeIfNotEmpty = (e, func) => {
        setaddClicked(false)
        seteditClicked(false)
        if (checkImageFormat(imageAsFile)) {
            setisEditDisabled(false)
        }
        props.isAddedFalse()
        props.isEditedFalse()
        let value = e.target.value;

        func(value);



    }

    const isUpdate = (prev, curr) => {
        if (curr === '' || curr === 0) {
            return prev;
        } else {
            return curr
        }
    }
    const editCardHandler = () => {

        seteditClicked(true)

        let editedCard = {
            id: props.id,
            templateName: isUpdate(props.name, templateName),
            category: isUpdate(props.category, category),
            price: isUpdate(props.price, price),
            des: isUpdate(props.des, des)
        }

        if (imageAsFile === '' || imageAsFile === undefined) {
            console.log('Empty IMG Field')
            props.editcard(editedCard, props.imgURL, props.imgName)

        } else if (imageAsFile.type.includes("image")) {
            console.log('Image Type')
            props.editcard(editedCard, imageAsFile, props.imgName)

        } else {
            console.log('Unknown Type')
            props.editcard(editedCard, props.imgURL, props.imgName)
        }

    }

    const addNewCardHandler = () => {
        setaddClicked(true)
        props.addNewCard({
            templateName: templateName,
            category: category,
            price: price,
            des: des
        }, imageAsFile)

    }


    const isInputFieldValidForAdd = () => {
        if (templateName.trim() !== '' && price >= 0 && price.toString().trim() !== '' && !price.length == 0 && des.trim() !== '' && category.trim() !== '' && imageAsFile !== '' && checkImageFormat(imageAsFile)) {
            return true;
        } else {
            return false;
        }
    }

    const isInputInvalid = () => {
        if (templateName.trim() === '' || price < 0 || price.toString().trim() === '' || price.length == 0 || des.trim() === '' || category.trim() === '') {
            return true;
        } else {
            return false;
        }
    }


    console.log('templateName', templateName)
    console.log('category', category)
    console.log('price', price)
    console.log('des', des)


    let savebtn = null;
    let btnStyle = {
        width: '58px',
        backgroundColor: '#24107e',
        borderColor: '#24107e'
    }

    const checkEdit = () => {
        return (isEditDisabled || editClicked || isInputInvalid())
    }

    const checkAdd = () => {
        return !isInputFieldValidForAdd() || addClicked
    }

    const onEnterKeyPressed = (e) => {

        let code = e.keyCode || e.which;
        if (code === 13) {
            if (props.type === 'add') {
                if (!checkAdd()) {
                    e.preventDefault();
                    addNewCardHandler()


                }
            } else if (props.type === 'edit') {
                e.preventDefault();
                editCardHandler()
            }
        }

    }

    let star;
    if (props.type === 'add') {
        star = '*';
        savebtn = (
            <div>
                <button className="add-btn" disabled={checkAdd()} onClick={() => {
                    addNewCardHandler()

                }} color="primary"  >{isInputFieldValidForAdd() && addClicked && !props.isAdded ? <Spinner size="sm" color="dark" /> : <p style={{ padding: '0', margin: '0' }}>Add</p>}</button>
                <Button onClick={props.modalOff} color="secondary">Cancel</Button>
            </div>
        )
    } else if (props.type === 'edit') {
        star = '';
        savebtn = (
            <div>
                <button className="add-btn" disabled={checkEdit()} onClick={() => {
                    editCardHandler()
                }} color="primary" >{editClicked && !props.isEdited ? <Spinner size="sm" color="light" /> : <p style={{ padding: '0', margin: '0' }}>Save</p>}</button>
                <Button onClick={props.toggleSubmit2} color="danger">Cancel</Button>
            </div>

        )
    }


    return (
        <div className="editCard-main-div">
            <ToastsContainer store={ToastsStore} />
            <Form>
                <FormGroup>
                    <Label>
                        Template Name<span className="star">{star}</span>

                    </Label>
                    <Input onKeyPress={onEnterKeyPressed} onChange={(e) => storeIfNotEmpty(e, settemplateName)} type="text" name="templatename" value={templateName} />
                </FormGroup>

                <FormGroup>
                    <Label>Category<span className="star">{star}</span></Label>
                    <Input onKeyPress={onEnterKeyPressed} onChange={(e) => storeIfNotEmpty(e, setcategory)} type="text" name="category" value={category} />
                </FormGroup>

                <FormGroup>
                    <Label>Price<span className="star">{star}</span></Label>
                    <Input onKeyPress={onEnterKeyPressed} onChange={(e) => storeIfNotEmpty(e, setprice)} type="number" name="price" value={price} />
                </FormGroup>

                <FormGroup>
                    <Label >Description<span className="star">{star}</span></Label>
                    <Input onChange={(e) => storeIfNotEmpty(e, setdes)} type="textarea" name="text" value={des} />
                </FormGroup>

                <FormGroup>
                    <Label>Upload Card<span className="star">{star}</span></Label>
                    <Input onKeyPress={onEnterKeyPressed} accept="image/*" style={{ color: errorColor }} onChange={handleImageAsFile} type="file" name="file" />
                </FormGroup>
            </Form>

            {savebtn}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAdded: state.ui.isCardAddedSuccess,
        isEdited: state.ui.isEdited
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAddedFalse: () => dispatch({ type: 'ADDED_FALSE' }),
        isEditedFalse: () => dispatch({ type: 'EDITED_FALSE' }),
        addNewCard: (card, img) => dispatch(addCard(card, img)),
        editcard: (card, img, prevImg) => dispatch(editCardFirebase(card, img, prevImg))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(editCard);