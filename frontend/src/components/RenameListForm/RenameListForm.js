import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/YupValidator';
import styles from './RenameListForm.module.sass';

const RenameListForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className={styles.changeContainer}>
                <Field
                    name='name'
                    component={FormInput}
                    container={styles.renameContainer}
                    inputfield={styles.inputfield}
                    warning = {styles.fieldWarning}
                    component={FormInput}
                    type='text'
                    label='Test'
                    deftext='qwer'
                />
                <button type='submit' className={styles.btnRenameBoard}>
                    <span className={styles.submitBtn}>Rename</span>
                </button>
            </form>


    );
}
function mapStateToProps(state, ownProps) {
    return {
      initialValues: {
        'name': ownProps.name
      }
  }
};

export default connect(mapStateToProps)( reduxForm({
    form: 'renameList',
    enableReinitialize: true,
    mapStateToProps,
    validate: customValidator(Schems.CreateBoardSchem)
})(RenameListForm));