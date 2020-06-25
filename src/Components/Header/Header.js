import React, { useState } from 'react'
import { logoutFirebase } from '../../Store/ActionCreators';
import './Header.css'

import { connect } from 'react-redux';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

const header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logout = () => {
        window.location.reload(false);
        props.logoutClicked();
    }


    return (
        <div>
            <Navbar className="navbar" color="dark" dark expand="md">
                <NavbarBrand >{props.title}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        {/* {props.user === "admin" ? <button onClick={props.editPage} className="mr-auto nav-button">Edit</button> : null}
                        {props.user === "admin" ? <button onClick={props.detailsPage} className="mr-auto nav-button">Details</button> : null} */}
                        <button onClick={logout} className="mr-auto nav-button logout">Logout</button>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPage: () => dispatch({ type: 'CLICKED_EDIT_PAGE' }),
        detailsPage: () => dispatch({ type: 'CLICKED_DETAILS_PAGE' }),
        logoutClicked: () => dispatch(logoutFirebase())
    }

}

export default connect(null, mapDispatchToProps)(header);
