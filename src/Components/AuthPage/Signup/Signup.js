import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signinFirebase } from '../../../Store/ActionCreators';
import { Spinner } from 'reactstrap';
import './Signup.css'
const signup = (props) => {

    let initialState = {
        value: '',
        valid: false
    }

    const [email, setemail] = useState(initialState)
    const [password1, setpassword1] = useState(initialState)
    const [password2, setpassword2] = useState(initialState)
    const [firstname, setfirstname] = useState(initialState)
    const [lastname, setlastname] = useState(initialState)
    const [isSignupClicked, setisSignupClicked] = useState(false)

    const emailHandler = (e) => {
        let email = e.target.value;
        setisSignupClicked(false);

        if (email !== '' && email.includes('@') && (email.includes('.com') || email.includes('.co') || email.includes('.in'))) {
            setemail({
                value: email,
                valid: true
            })
        } else {
            setemail({
                value: email,
                valid: false
            })
        }

    }

    const password1Handler = (e) => {
        setisSignupClicked(false);
        let password = e.target.value;
        if (password !== '') {
            setpassword1({
                value: password,
                valid: true
            })
        } else {
            setpassword1({
                value: password,
                valid: false
            })
        }

    }

    const password2Handler = (e) => {
        setisSignupClicked(false);
        let pass1 = password1.value;
        let pass2 = e.target.value;

        if (pass1 === pass2 && password1.valid) {
            setpassword2({
                value: pass2,
                valid: true
            })
        } else {
            setpassword2({
                value: pass2,
                valid: false
            })
        }

    }


    const firstnameHandler = (e) => {
        setisSignupClicked(false);
        let firstname = e.target.value;
        if (firstname !== '') {
            setfirstname({
                value: firstname,
                valid: true
            })
        } else {
            setfirstname({
                value: firstname,
                valid: false
            })
        }

    }

    const lastnameHandler = (e) => {
        setisSignupClicked(false);
        let lastname = e.target.value;
        if (lastname !== '') {
            setlastname({
                value: lastname,
                valid: true
            })
        } else {
            setlastname({
                value: lastname,
                valid: false
            })
        }

    }

    const isValuesValid = () => {
        if (email.valid && password1.valid && password2.valid && firstname.valid && lastname.valid) {
            return true
        } else {
            return false
        }
    }

    const signupClicked = () => {
        setisSignupClicked(true);
        if (isValuesValid()) {

            props.signinFirebaseDispatch({
                email: email.value,
                password: password2.value,
                firstname: firstname.value,
                lastname: lastname.value
            })
        }


    }



    let emailStyle = {
        borderBottom: !email.valid && isSignupClicked ? '2px solid red' : '1px solid grey'
    }

    let password1Style = {
        borderBottom: !password1.valid && isSignupClicked ? '2px solid red' : '1px solid grey'
    }

    let password2Style = {
        borderBottom: !password2.valid && isSignupClicked ? '2px solid red' : '1px solid grey'
    }

    let firstnameStyle = {
        borderBottom: !firstname.valid && isSignupClicked ? '2px solid red' : '1px solid grey'
    }

    let lastnameStyle = {
        borderBottom: !lastname.valid && isSignupClicked ? '2px solid red' : '1px solid grey'
    }

    const onEnterKeyPressed = (e) => {
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            signupClicked()
        }
    }



    return (
        <div className="auth-container">
            <div className="signup-main-div">
                <h2 className="signup-title">Signup</h2>

                <input onKeyUp={onEnterKeyPressed} style={firstnameStyle} onChange={firstnameHandler} className="inputfield firstname-input" type="text" placeholder="Firstname" />
                <input onKeyUp={onEnterKeyPressed} style={lastnameStyle} onChange={lastnameHandler} className="inputfield lastname-input" type="text" placeholder="Lastname" />
                <input onKeyUp={onEnterKeyPressed} style={emailStyle} onChange={emailHandler} className="inputfield username-input" type="email" required={true} placeholder="Email" />
                <input onKeyUp={onEnterKeyPressed} style={password1Style} onChange={password1Handler} className="inputfield password-input" type="password" placeholder="Password" />
                <input onKeyUp={onEnterKeyPressed} style={password2Style} onChange={password2Handler} className="inputfield password-input" type="password" placeholder="Confirm Password" />
                <div className="button-div">
                    <button onClick={props.signupBackClicked} className="input-button-signup back-button">Back</button>
                    <button onClick={signupClicked} className="input-button-signup signup-button">{isValuesValid() && isSignupClicked ? <Spinner size="sm" color="light" /> : <p style={{ padding: '0', margin: '0' }}>Signin</p>}</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupBackClicked: () => dispatch({ type: 'SIGNUP_BACK_CLICKED' }),
        signinFirebaseDispatch: (newUser) => dispatch(signinFirebase(newUser))

    }
}

export default connect(null, mapDispatchToProps)(signup);