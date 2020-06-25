import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import './Login.css'
import { loginFirebase } from '../../../Store/ActionCreators';

const login = (props) => {

    let initialState = {
        value: '',
        valid: false
    }

    const [email, setemail] = useState(initialState);
    const [password, setpassword] = useState(initialState);
    const [isLoginClicked, setisLoginClicked] = useState(false)

    const emailHandler = (e) => {
        props.noAuthError(false)
        let email = e.target.value;
        setisLoginClicked(false)

        let isEmailValid = (email !== '' && email.includes('@') && (email.includes('.com') || email.includes('.co') || email.includes('.in')))
        setemail({ value: email, valid: isEmailValid })
    }

    const isCredValid = () => {
        return email.valid && password.valid
    }

    const isThisAdmin = () => {

        if (email.value === 'admin@admin.com' && password.value === 'adminadmin') {
            return true
        }
        return false

    }
    if (isCredValid()) {
        console.log(isThisAdmin())
    }


    const passwordHandler = (e) => {
        props.noAuthError(false)
        setisLoginClicked(false)

        let pass = e.target.value;

        if (pass !== '') {
            setpassword({
                value: pass,
                valid: true
            });
        } else {
            setpassword({
                value: pass,
                valid: false
            });
        }
    }



    const loginButton = () => {


        setisLoginClicked(true)
        if (isCredValid()) {

            props.loginClicked({
                email: email.value,
                password: password.value
            })
        }
        if (isThisAdmin()) {
            props.isAdmin()
        }
    }





    let emailStyle = {
        borderBottom: !email.valid && isLoginClicked === true ? '2px solid red' : '1px solid grey'
    }

    let passwordStyle = {
        borderBottom: !password.valid && isLoginClicked === true ? '2px solid red' : '1px solid grey'
    }


    console.log('AUTHERROR', props.authError)

    const onEnterKeyPressed = (e) => {
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            loginButton()
        }
    }


    return (
        <div className="auth-container">
            <div className="login-main-div">
                <h2 className="login-title">Login</h2>
                <div style={{ float: 'left', color: 'red' }}>{props.authError ? <p style={{ margin: '0px', padding: '0px' }}>Invalid credentials!</p> : null}</div>
                <input onKeyUp={onEnterKeyPressed} style={emailStyle} onChange={emailHandler} className="inputfield username-input" type="email" placeholder="Email" />
                <input onKeyUp={onEnterKeyPressed} style={passwordStyle} onChange={passwordHandler} className="inputfield password-input" type="password" placeholder="Password" />
                <div className="button-div">
                    <button onClick={props.loginBackClicked} className="input-button-login back-button">Back</button>
                    <button onClick={loginButton} className="input-button-login login-button">{isCredValid() && isLoginClicked && !props.authError ? <Spinner size="sm" color="light" /> : <p style={{ padding: '0', margin: '0' }}>Login</p>}</button>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        authError: state.authReducer.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginBackClicked: () => dispatch({ type: 'LOGIN_BACK_CLICKED' }),
        loginClicked: (cred) => dispatch(loginFirebase(cred)),
        isAdmin: () => dispatch({ type: 'ADMIN' }),
        noAuthError: () => dispatch({ type: 'NO_AUTHERROR' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);