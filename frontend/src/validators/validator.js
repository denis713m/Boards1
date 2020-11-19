const validator = (schema) => {
    return  values => {
        console.log(values);
        const errors = {};
        try {
             schema.validateSync(values, {abortEarly: false});
            return errors;
        } catch (err) {
            console.log(err);
            err.inner.forEach(error => {
                errors[error.path] = error.message;
            });
            return errors;
        }
    }
};

export default validator;