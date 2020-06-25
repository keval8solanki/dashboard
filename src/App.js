import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';


import './App.css';

import AuthPage from './Components/AuthPage/AuthPage';
import Dashboard from './Components/Dashboard/Dashboard';
import ClientPage from './Components/ClientPage/ClientPage';

const app = (props) => {
  console.log('Auth', props.auth)

  let component = <Spinner style={{ width: '3rem', height: '3rem' }} color="light" type="grow" />
  if (props.auth.uid) {
    console.log('Logged in')
    console.log(props.auth.uid)
    if (props.auth.uid === 'Dy4TdfimwJhG12eeYBRFdOt8xCS2') {
      console.log('Admin')
      component = <Dashboard />
    } else {
      console.log('User')
      component = <ClientPage />
    }
  } else if (props.auth.isEmpty) {

    component = <AuthPage />
  }

  if (!props.auth.isLoaded) {
    console.log('Loggedout')
    component = <div style={{
      width: 'inherit',
      height: '500px',
      padding: '128px'
    }}><Spinner style={{ width: '6rem', height: '6rem' }} color="light" type="grow" /></div>
  }


  return (
    <div className="App">
      {component}
    </div>
  );

}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(app);


