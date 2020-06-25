// FIREBASE FIRESTORE

export const addCard = (card, img) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log(img)
        const firestore = getFirestore();
        const firebase = getFirebase()
        const storage = firebase.storage();
        const uploadTask = storage.ref(`/images/${img.name}`).put(img)

        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(img.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        firestore.collection('cards').add({
                            ...card,
                            like: 0,
                            createdAt: new Date(),
                            imgURL: fireBaseUrl,
                            imgName: img.name

                        }).then(() => {
                            dispatch({ type: 'NEW_CARD_ADDED_SUCCESS' }, card)
                        }).catch((e) => {
                            console.log("Error Creating Card")
                        })
                    })
            })
    }
}

export const deleteCard = (id, imgName) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('ImageName', imgName)
        const firestore = getFirestore();
        const firebase = getFirebase();
        firebase.storage().ref().child('images/' + imgName).delete().then(() => {
            dispatch({ type: 'CARD_DELETE' })
            firestore.collection('cards').doc(id).delete().then(() => {
                console.log('CARD DELETE')
            }).catch(err => {
                console.log('Unable to delete')
            });
        });
    }
}

export const editCardFirebase = (card, img, prevImgName) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('Card', card)
        console.log('IMG', img)
        console.log('prevIMG', prevImgName)
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();

        if (typeof img === 'string') {
            console.log('It a string')
            firestore.collection('cards').doc(card.id).update({
                ...card,
                "templateName": card.templateName,
                "category": card.category,
                "price": card.price,
                "des": card.des,
                "imgURL": img,
                "imgName": prevImgName

            }).then(() => {
                console.log('Card Edited')
                dispatch({ type: 'EDIT_CARD' }, card)
            })
        } else if (typeof img === 'object') {
            console.log('Its an object')
            const uploadTask = storage.ref(`/images/${img.name}`).put(img)
            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    storage.ref('images').child(img.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            firestore.collection('cards').doc(card.id).update({
                                "templateName": card.templateName,
                                "category": card.category,
                                "price": card.price,
                                "des": card.des,
                                "imgURL": fireBaseUrl,
                                "imgName": img.name
                            }).then(() => {
                                console.log('Card Edited')
                                dispatch({ type: 'EDIT_CARD' }, card)
                                firebase.storage().ref().child('images/' + prevImgName).delete().then(() => {
                                    console.log(prevImgName + ' is deleted')
                                }).catch(err => {
                                    console.log('Unable to delete')
                                });
                            }).catch((e) => {
                                console.log("Error Creating Card")
                            })
                        })
                })
        }

        // if (typeof (img) === string) {


        // } else {



        // }
    }
}
export const likeCard = (id, val) => {
    console.log(id, val)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('cards').doc(id).update({
            "like": val
        })
    }
}


// FIREBASE AUTH ------------------------------------------------------

export const loginFirebase = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}


export const signinFirebase = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS ' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const logoutFirebase = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT' })
        })
    }
}

// FIREBASE STORAGE ---------------------------------------------------------------


