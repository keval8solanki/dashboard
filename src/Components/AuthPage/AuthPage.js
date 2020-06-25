import React from 'react'
import { connect } from 'react-redux';

import './AuthPage.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Banner from './Banner/Banner';
import Anime from 'react-anime';

const authPage = (props) => {
    return (
        <div className="authpage-main-div">

            {props.isBannerPageOpen ? <Banner /> : null}
            {props.isLoginPageOpen ? <Anime
                easing="easeOutElastic"
                duration={700}
                scale={[0, 1]}
            ><Login /></Anime> : null}
            {props.isSignupPageOpen ? <Anime
                easing="easeOutElastic"
                duration={700}
                scale={[0, 1]}
            ><Signup /></Anime> : null}


        </div>
    )



}
const mapStateToProps = (state) => {
    return {
        isBannerPageOpen: state.ui.isBannerPageOpen,
        isLoginPageOpen: state.ui.isLoginPageOpen,
        isSignupPageOpen: state.ui.isSignupPageOpen

    }
}

export default connect(mapStateToProps)(authPage);