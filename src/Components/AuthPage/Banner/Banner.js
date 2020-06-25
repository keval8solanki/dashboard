// Optimized
import React from 'react'
import { connect } from 'react-redux';

import './Banner.css'
const banner = (props) => {
    return (
        <div className="banner-main-div">
            <p className="welcome">Welcome to</p>
            <h1 className="company-name">FistBump Digital</h1>
            <p className="slogan">In here, It's Possible!</p>
            <div className="banner-button-div">
                <button onClick={props.loginClicked} className="buttons">Login</button>
                <button onClick={props.signupClicked} className="buttons">Signup</button>
            </div>
        </div>

    )
}
const mapDispatchToState = (dispatch) => {
    return {
        loginClicked: () => dispatch({ type: 'BANNER_LOGIN_CLICKED' }),
        signupClicked: () => dispatch({ type: 'BANNER_SIGNUP_CLICKED' })
    }
}
export default connect(null, mapDispatchToState)(banner);