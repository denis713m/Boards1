import React from 'react';
import classNames from 'classnames';
import styles from './FormInput.module.sass';

const FormInput = (props) => {
  const {deftext, label, input, type, className,valid,notvalid,container,inputfield, warning, meta: {touched, error}} = props;
  console.log(props);

  return (
      <div className={container}>
          {(touched && (error && <span className={warning}>{error}</span>))}
          <input {...input} placeholder={label} type={type} 
                 className={classNames(inputfield, {[notvalid]: touched && error,
                                                [valid]: touched && !error})}/>
      </div>
  )
};

FormInput.defaultProps = {
      notvalid: styles.notValid,
      valid: styles.valid,
      container: styles.container,
      inputfield: styles.input,
      warning: styles.fieldWarning
};

export default FormInput;