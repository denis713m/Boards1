import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import fp from 'lodash/fp';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/actions';
import styles from './LoginPage.module.sass';

const LoginPage = (props) => {
  console.log(props);
  const submit = values => {
    console.log(props);
    props.login({values:values, history:props.history});
  }  
  
    return (
      <div>
        <Link className={styles.btnSignUp} to={'/register'}>Registrartion</Link>
        <div className={styles.mainContainer}>
            <div className={styles.formHeader}>LOGIN TO YOUR ACCOUNT</div>
            <LoginForm onSubmit={submit} />             
        </div>
      </div>
    );
    
}

const mapStateToProps = (state) => {
    return state;
  }
  
  const mapDispatchToProps = dispatch => ({
    login: userInfo => dispatch(login(userInfo))
  })



export default fp.flow(withRouter, connect(mapStateToProps, mapDispatchToProps))(LoginPage);
