import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header/Header';
import Edit from './Edit/Edit';
import Likes from './Likes/Likes';
import Details from './Details/Details';



const dashboard = (props) => {
    return (
        <div className="dashboard-main-div">
            <Header title="Dashboard" user="admin" />
            {props.isEditPageOpen ? <Edit /> : null}
            {props.isDetailsPageOpen ? <Details /> : null}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isEditPageOpen: state.ui.isEditPageOpen,
        isDetailsPageOpen: state.ui.isDetailsPageOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(dashboard);